json.array! @portfolios do |portfolio|
  json.(portfolio, :id, :name)
end