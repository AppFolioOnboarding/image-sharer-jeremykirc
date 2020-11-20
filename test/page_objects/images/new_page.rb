module PageObjects
  module Images
    class NewPage < PageObjects::Document
      path '/images/new'

      form_for :image do
        element :link do
          def error_message
            node.find(:xpath, '../..').find('.js-link').text
          end
        end
        element :tag_list
      end

      def create_image!(link: nil, tags: nil)
        self.link.set(link)
        tag_list.set(tags.join(', '))
        node.find('#submit-btn').click
        window.change_to(NewPage, IndexPage)
      end
    end
  end
end
