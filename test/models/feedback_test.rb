require 'test_helper'

class FeedbackTest < ActiveSupport::TestCase
  def setup
    @feedback1 = feedbacks(:feedback1)
  end

  test 'should fail validation with missing name' do
    @feedback1.name = ''
    assert_not @feedback1.valid?
    assert @feedback1.errors.added?(:name, :blank)
  end

  test 'should fail validation with missing comment' do
    @feedback1.comment = ''
    assert_not @feedback1.valid?
    assert @feedback1.errors.added?(:comment, :blank)
  end

  test 'should succeed validation' do
    assert @feedback1.valid?
  end
end
