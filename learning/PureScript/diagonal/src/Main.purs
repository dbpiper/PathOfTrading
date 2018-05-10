module Main where

import Prelude

import Control.Monad.Eff
import Control.Monad.Eff.Console (CONSOLE, logShow)

import Math (sqrt, pi, pow)


diagonal w h = sqrt (w * w + h * h)

circleArea r = pi * r * r

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = logShow (diagonal 3.0 4.0)
