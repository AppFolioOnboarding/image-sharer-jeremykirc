function filterByTag() {
  const tagForFilter = $(this).text();
  $('.filter-tag').text(tagForFilter);
  $('.filter').show();
  $('.image-card').show();
  $('.tag-list').each(function () {
    const $tagList = $(this);
    const tags = $tagList.text().split(/\r?\n/);
    let showImage = false;
    tags.forEach((tag) => {
      if (tag.trim() === tagForFilter.trim()) {
        showImage = true;
      }
    });
    if (!showImage) {
      $tagList.closest('.image-card').hide();
    }
  });
}

function clearFilter() {
  $('.filter-tag').text('');
  $('.filter').hide();
  $('.image-card').show();
}

function deleteImage() {
  const $this = $(this);
  const id = $this.attr('id');
  if (window.confirm('Are you sure you want to delete this image?')) {
    $.ajax({
      url: `/images/${id}`,
      method: 'DELETE',
      success() {
        $this.closest('.image-card').remove();
      }
    });
  }
}

$('.tag-list').on('click', '.tag', filterByTag);
$('#clear-filter-btn').on('click', clearFilter);
$('.delete-image-btn').on('click', deleteImage);
