require 'test_helper'

class ApiFeedbacksControllerTest < ActionDispatch::IntegrationTest
  # Test create.

  test 'should fail post create with missing name' do
    post api_feedbacks_path, params: { comment: 'test feedback' }
    assert_response :bad_request
    json_response = JSON.parse(response.body)
    assert_equal json_response['message'],
                 "#{Api::FeedbacksController::FEEDBACK_ERROR}: "\
                 "Name can't be blank"
  end

  test 'should fail post create with missing comment' do
    post api_feedbacks_path, params: { name: 'James Smith' }
    assert_response :bad_request
    json_response = JSON.parse(response.body)
    assert_equal json_response['message'],
                 "#{Api::FeedbacksController::FEEDBACK_ERROR}: "\
                 "Comment can't be blank"
  end

  test 'should succeed post create' do
    name = 'James Smith'
    comment = 'test feedback'
    assert_difference 'Feedback.count', +1 do
      post api_feedbacks_path, params: { name: name, comment: comment }
    end
    assert_response :created
    json_response = JSON.parse(response.body)
    assert_equal json_response['message'],
                 Api::FeedbacksController::FEEDBACK_SUCCESS
    assert_equal Feedback.last.name, name
    assert_equal Feedback.last.comment, comment
  end
end
