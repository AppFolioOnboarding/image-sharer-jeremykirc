function filterByTag() {
  let tagForFilter = $(this).text();
  $('.filter').find('.tag').text(tagForFilter);
  $('.filter').show();
  $('.image-container').show();
  $('.tag-list').each(function() {
    let $tagList = $(this);
    let tags = $tagList.text().split(/\r?\n/);
    let showImage = false;
    tags.map(function(tag) {
      if (tag.trim() == tagForFilter.trim()) {
        showImage = true;
        return;
      }
    });
    if (!showImage) {
      $tagList.closest('.image-container').hide();
    }
  });
}

function clearFilter() {
  $('.filter').find('.tag').text('');
  $('.filter').hide();
  $('.image-container').show();
}

$('.tag-list').on('click', '.tag', filterByTag);
$('#clear-filter-btn').on('click', clearFilter);
