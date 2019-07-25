json.array! @message do |message|
  json.id message.user_id
  json.text message.text
  json.image message.image
  json.name message.user.nickname
end