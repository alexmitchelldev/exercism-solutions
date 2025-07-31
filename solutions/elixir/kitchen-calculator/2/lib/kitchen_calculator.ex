defmodule KitchenCalculator do
  defp unit_map(:milliliter), do: 1
  defp unit_map(:cup), do: 240
  defp unit_map(:fluid_ounce), do: 30
  defp unit_map(:teaspoon), do: 5
  defp unit_map(:tablespoon), do: 15

  def get_volume(volume_pair) do
    {_, volume} = volume_pair
    volume
  end

  def to_milliliter(volume_pair) do
    {unit, volume} = volume_pair

    {:milliliter, volume * unit_map(unit)}
  end

  def from_milliliter(volume_pair, target_unit) do
    {_, volume} = volume_pair

    {target_unit, volume / unit_map(target_unit)}
  end

  def convert(volume_pair, target_unit) do
    {unit, volume} = volume_pair
    multiplier = unit_map(unit) / unit_map(target_unit)
    {target_unit, volume * multiplier}
  end
end
