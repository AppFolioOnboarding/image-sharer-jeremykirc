require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  def setup
    @image = images(:image1)
  end

  test 'should fail validation with missing link' do
    @image.link = ''
    assert_not @image.valid?
    assert @image.errors.added?(:link, :blank)
  end

  test 'should fail validation with invalid link' do
    link = 'invalid_url'
    @image.link = link
    assert_not @image.valid?
    assert @image.errors.added?(:link, :invalid, value: link)
  end

  test 'should succeed validation' do
    assert @image.valid?
  end
end
