require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get webdev" do
    get static_pages_webdev_url
    assert_response :success
  end


  test "should get consulting" do
    get static_pages_consulting_url
    assert_response :success
  end
end
