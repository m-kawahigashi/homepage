json.array! @message do |message|
  json.user message.user_id
  json.text message.text
  json.image message.image
  json.name message.user.nickname
  json.id message.id
end