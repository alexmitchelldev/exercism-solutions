defmodule FreelancerRates do
  def daily_rate(hourly_rate) do
    hourly_rate * 8 / 1
  end

  def apply_discount(before_discount, discount) do
    before_discount - before_discount * (discount / 100)
  end

  def monthly_rate(hourly_rate, discount) do
    billable_days = 22
    trunc(ceil(apply_discount(daily_rate(hourly_rate) * billable_days, discount)))
  end

  def days_in_budget(budget, hourly_rate, discount) do
    Float.floor(budget / apply_discount(daily_rate(hourly_rate), discount), 1)
  end
end
