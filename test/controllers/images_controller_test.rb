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

  # Test index.

  test 'should succeed get index' do
    get images_path
    assert_response :success
    assert_template 'images/index'
  end
end
