require 'test_helper'

class FeedbacksControllerTest < ActionDispatch::IntegrationTest
  # Test new.

  test 'should succeed get new' do
    get new_feedback_path
    assert_response :success
    assert_template 'feedbacks/new'
  end
end
