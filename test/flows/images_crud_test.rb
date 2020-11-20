require 'flow_test_helper'

class ImagesCrudTest < FlowTestCase
  def setup
    @image1 = images(:image1)
    @image2 = images(:image2)
  end

  test 'add an image' do
    images_index_page = PageObjects::Images::IndexPage.visit

    new_image_page = images_index_page.add_new_image!

    tags = %w[foo bar]
    new_image_page = new_image_page.create_image!(
      link: 'invalid',
      tags: tags
    ).as_a(PageObjects::Images::NewPage)
    assert_equal 'Link is invalid', new_image_page.link.error_message

    image_link = 'https://media3.giphy.com/media/EldfH1VJdbrwY/200.gif'
    images_index_page = new_image_page.create_image!(
      link: image_link,
      tags: tags
    ).as_a(PageObjects::Images::IndexPage)
    assert_equal ImagesController::IMAGE_SAVED,
                 images_index_page.flash_message(:success)

    assert images_index_page.showing_image_first?(link: image_link, tags: tags)
  end

  test 'delete an image' do
    images_index_page = PageObjects::Images::IndexPage.visit
    assert_equal Image.count, images_index_page.image_grid.count
    assert images_index_page.showing_images?(images: [@image1, @image2])

    images_index_page.delete_image(image: @image1) do |confirm_dialog|
      assert_equal 'Are you sure you want to delete this image?',
                   confirm_dialog.text
      confirm_dialog.dismiss
    end
    assert images_index_page.showing_images?(images: [@image1, @image2])

    images_index_page.delete_image(image: @image1, &:accept)
    assert images_index_page.showing_image?(image: @image2)
    assert_not images_index_page.showing_image?(image: @image1)
  end
end
