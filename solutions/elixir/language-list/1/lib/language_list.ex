defmodule LanguageList do
  def new() do
    []
  end

  def add(list, language) do
    [language | list]
  end

  def remove(list) do
    Enum.drop(list, 1)
  end

  def first(list) do
    Enum.at(list, 0)
  end

  def count(list) do
    Enum.count(list)
  end

  def functional_list?(list) do
    Enum.any?(list, &(&1 === "Elixir"))
  end
end
