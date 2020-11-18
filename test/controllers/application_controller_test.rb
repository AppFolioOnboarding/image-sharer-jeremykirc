require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  # Test home.

  test 'should succeed get home' do
    get root_path
    assert_response :success
    assert_template 'images/index'
  end
end
