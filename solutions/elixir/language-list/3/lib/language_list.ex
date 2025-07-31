defmodule LanguageList do
  def new() do
    []
  end

  def add(list, language) do
    [language | list]
  end

  def remove(list) do
    [head | tail] = list
    tail
  end

  def first(list) do
    [head | _] = list
    head
  end

  def count(list) do
    length(list)
  end

  def functional_list?(list) do
    List.foldl(list, false, fn x, acc -> acc = acc or x === "Elixir" end)
  end
end
