require Logger

defmodule Darts do
  @type position :: {number, number}

  @doc """
  Calculate the score of a single dart hitting a target
  """
  @spec score(position) :: integer
  def score({x, y}) do
    outer_circle = 10
    middle_circle = 5
    inner_circle = 1

    hypoteneuse = :math.sqrt(abs(x) ** 2 + abs(y) ** 2)

    cond do
      hypoteneuse <= inner_circle -> 10
      hypoteneuse <= middle_circle -> 5
      hypoteneuse <= outer_circle -> 1
      true -> 0
    end
  end
end
