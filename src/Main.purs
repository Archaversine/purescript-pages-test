module Main where

import Prelude

import Data.Maybe (Maybe(..))

import Effect (Effect)
import Effect.Console (log)

import Web.DOM.Document (toNonElementParentNode)
import Web.DOM.Element (toNode)
import Web.DOM.Node (setTextContent)
import Web.DOM.NonElementParentNode (getElementById)
import Web.HTML (window)
import Web.HTML.HTMLDocument (toDocument)
import Web.HTML.Window (document)

main :: Effect Unit
main = do 
  win <- window
  doc <- document win

  elem <- getElementById "target-elem" $ toNonElementParentNode $ toDocument doc

  case elem of 
    Nothing -> log "Error: no target element"
    Just e -> setTextContent "Modified from Purescript!" (toNode e)