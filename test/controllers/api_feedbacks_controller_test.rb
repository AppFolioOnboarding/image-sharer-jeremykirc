require 'test_helper'

class ApiFeedbacksControllerTest < ActionDispatch::IntegrationTest
  # Test create.

  test 'should fail post create with missing name' do
    post api_feedbacks_path, params: { comment: 'test feedback' }
    assert_response :bad_request
    json_response = JSON.parse(response.body)
    assert_equal json_response['error'],
                 "Validation failed: Name can't be blank"
  end

  test 'should fail post create with missing comment' do
    post api_feedbacks_path, params: { name: 'James Smith' }
    assert_response :bad_request
    json_response = JSON.parse(response.body)
    assert_equal json_response['error'],
                 "Validation failed: Comment can't be blank"
  end

  test 'should succeed post create' do
    name = 'James Smith'
    comment = 'test feedback'
    assert_difference 'Feedback.count', +1 do
      post api_feedbacks_path, params: { name: name, comment: comment }
    end
    assert_response :created
    assert_equal Feedback.last.name, name
    assert_equal Feedback.last.comment, comment
  end
end
