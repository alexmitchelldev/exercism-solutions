defmodule Secrets do
  def secret_add(secret) do
    add = fn val ->
      val + secret
    end

    add
  end

  def secret_subtract(secret) do
    subtract = &(&1 - secret)
    subtract
  end

  def secret_multiply(secret) do
    mult = &(&1 * secret)
    mult
  end

  def secret_divide(secret) do
    fn val ->
      div(val, secret)
    end
  end

  def secret_and(secret) do
    fn val ->
      Bitwise.band(val, secret)
    end
  end

  def secret_xor(secret) do
    fn val ->
      Bitwise.bxor(val, secret)
    end
  end

  def secret_combine(secret_function1, secret_function2) do
    fn val ->
      secret_function2.(secret_function1.(val))
    end
  end
end
