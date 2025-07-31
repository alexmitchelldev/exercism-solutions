defmodule FreelancerRates do
  @billable_days 22

  def daily_rate(hourly_rate), do: hourly_rate * 8.0

  def apply_discount(before_discount, discount),
    do: before_discount - before_discount * (discount / 100)

  def monthly_rate(hourly_rate, discount) do
    hourly_rate
    |> daily_rate()
    |> Kernel.*(@billable_days)
    |> apply_discount(discount)
    |> ceil()
  end

  def days_in_budget(budget, hourly_rate, discount) do
    hourly_rate
    |> daily_rate()
    |> apply_discount(discount)
    |> then(fn x -> budget / x end)
    |> Float.floor(1)

    hourly_rate
    |> then(&daily_rate/1)
    |> then(&apply_discount(&1, discount))
    |> then(&(budget / &1))
    |> then(&Float.floor(&1, 1))

    # Float.floor(budget / apply_discount(daily_rate(hourly_rate), discount), 1)
  end
end
