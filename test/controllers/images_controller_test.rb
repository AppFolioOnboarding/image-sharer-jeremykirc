require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  # Test new.

  test 'should succeed get new' do
    get new_image_path
    assert_response :success
    assert_template 'images/new'
  end

  # Test create.

  test 'should fail post create with missing link' do
    post images_path, params: { image: { link: '' } }
    assert_response :success
    assert_template 'images/new'
    assert_select '.error-msg', 1
  end

  test 'should fail post create with invalid link' do
    link = 'invalid_link'
    post images_path, params: { image: { link: link } }
    assert_response :success
    assert_template 'images/new'
    assert_select '.error-msg', 1
  end

  test 'should succeed post create' do
    link = 'https://test_image.com'
    assert_difference 'Image.count', +1  do
      post images_path, params: { image: { link: link } }
    end
    assert_redirected_to images_path
    assert_equal flash[:success], ImagesController::IMAGE_SAVED
    assert_equal Image.last.link, link
  end

  test 'should succeed post create with tags' do
    link = 'https://test_image.com'
    tag_list = %w[tag1 tag2]
    assert_difference 'Image.count', +1  do
      post images_path, params: { image: { link: link, tag_list: tag_list } }
    end
    assert_redirected_to images_path
    assert_equal flash[:success], ImagesController::IMAGE_SAVED
    image = Image.last
    assert_equal image.link, link
    assert_equal image.tags.map(&:name), tag_list
  end

  # Test index.

  test 'should succeed get index and display images and tags' do
    get images_path
    assert_response :success
    assert_template 'images/index'
    assert_select '.image', Image.count
    assert_select '.tag', ActsAsTaggableOn::Tag.count
  end
end
