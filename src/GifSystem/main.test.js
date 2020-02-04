import React from "react";
import { mount } from "enzyme";
import GifSystem from "./index";
const flushPromises = require("flush-promises");

const mockedGiphyAnswer = [
  {
    type: "gif",
    id: "FWtVYDHIxgGgE",
    url: "https://giphy.com/gifs/moon-night-FWtVYDHIxgGgE",
    slug: "moon-night-FWtVYDHIxgGgE",
    bitly_gif_url: "https://gph.is/18Qg8LA",
    bitly_url: "https://gph.is/18Qg8LA",
    embed_url: "https://giphy.com/embed/FWtVYDHIxgGgE",
    username: "",
    source: "https://baka-potato.tumblr.com/post/43304039509",
    title: "cherry blossom moon GIF",
    rating: "g",
    content_url: "",
    source_tld: "baka-potato.tumblr.com",
    source_post_url: "https://baka-potato.tumblr.com/post/43304039509",
    is_sticker: 0,
    import_datetime: "2013-07-30 19:43:50",
    trending_datetime: "1970-01-01 00:00:00",
    images: {
      downsized_large: {
        height: "281",
        size: "574894",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.gif",
        width: "500"
      },
      fixed_height_small_still: {
        height: "100",
        size: "5813",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/100_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100_s.gif",
        width: "178"
      },
      original: {
        frames: "18",
        hash: "fec274868a37bc3addb879461e127ca2",
        height: "281",
        mp4:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.mp4",
        mp4_size: "219284",
        size: "574894",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.gif",
        webp:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.webp",
        webp_size: "190116",
        width: "500"
      },
      fixed_height_downsampled: {
        height: "200",
        size: "91647",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200_d.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200_d.gif",
        webp:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200_d.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200_d.webp",
        webp_size: "67526",
        width: "356"
      },
      downsized_still: {
        height: "281",
        size: "44411",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy_s.gif",
        width: "500"
      },
      fixed_height_still: {
        height: "200",
        size: "17898",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200_s.gif",
        width: "356"
      },
      downsized_medium: {
        height: "281",
        size: "574894",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.gif",
        width: "500"
      },
      downsized: {
        height: "281",
        size: "574894",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.gif",
        width: "500"
      },
      preview_webp: {
        height: "240",
        size: "41114",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy-preview.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-preview.webp",
        width: "428"
      },
      original_mp4: {
        height: "268",
        mp4:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.mp4",
        mp4_size: "219284",
        width: "480"
      },
      fixed_height_small: {
        height: "100",
        mp4:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/100.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100.mp4",
        mp4_size: "35993",
        size: "89814",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/100.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100.gif",
        webp:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/100.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100.webp",
        webp_size: "45222",
        width: "178"
      },
      fixed_height: {
        height: "200",
        mp4:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200.mp4",
        mp4_size: "99881",
        size: "242384",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200.gif",
        webp:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200.webp",
        webp_size: "107078",
        width: "356"
      },
      downsized_small: {
        height: "240",
        mp4:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy-downsized-small.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-downsized-small.mp4",
        mp4_size: "68989",
        width: "428"
      },
      preview: {
        height: "224",
        mp4:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy-preview.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-preview.mp4",
        mp4_size: "43886",
        width: "400"
      },
      fixed_width_downsampled: {
        height: "112",
        size: "35853",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200w_d.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w_d.gif",
        webp:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200w_d.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w_d.webp",
        webp_size: "27132",
        width: "200"
      },
      fixed_width_small_still: {
        height: "56",
        size: "2962",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/100w_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100w_s.gif",
        width: "100"
      },
      fixed_width_small: {
        height: "56",
        mp4:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/100w.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100w.mp4",
        mp4_size: "17014",
        size: "39409",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/100w.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100w.gif",
        webp:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/100w.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100w.webp",
        webp_size: "22476",
        width: "100"
      },
      original_still: {
        height: "281",
        size: "44411",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy_s.gif",
        width: "500"
      },
      fixed_width_still: {
        height: "112",
        size: "6334",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200w_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w_s.gif",
        width: "200"
      },
      looping: {
        mp4:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy-loop.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-loop.mp4",
        mp4_size: "855529"
      },
      fixed_width: {
        height: "112",
        mp4:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200w.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w.mp4",
        mp4_size: "38874",
        size: "100361",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200w.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w.gif",
        webp:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/200w.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w.webp",
        webp_size: "50656",
        width: "200"
      },
      preview_gif: {
        height: "75",
        size: "46792",
        url:
          "https://media1.giphy.com/media/FWtVYDHIxgGgE/giphy-preview.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-preview.gif",
        width: "133"
      },
      "480w_still": {
        url:
          "https://media2.giphy.com/media/FWtVYDHIxgGgE/480w_s.jpg?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=480w_s.jpg",
        width: "480",
        height: "270"
      }
    },
    analytics: {
      onload: {
        url:
          "https://giphy-analytics.giphy.com/simple_analytics?response_id=63df9eaa9bc4a541578f422141f9c76dec91578c&event_type=GIF_SEARCH&gif_id=FWtVYDHIxgGgE&action_type=SEEN"
      },
      onclick: {
        url:
          "https://giphy-analytics.giphy.com/simple_analytics?response_id=63df9eaa9bc4a541578f422141f9c76dec91578c&event_type=GIF_SEARCH&gif_id=FWtVYDHIxgGgE&action_type=CLICK"
      },
      onsent: {
        url:
          "https://giphy-analytics.giphy.com/simple_analytics?response_id=63df9eaa9bc4a541578f422141f9c76dec91578c&event_type=GIF_SEARCH&gif_id=FWtVYDHIxgGgE&action_type=SENT"
      }
    }
  },
  {
    type: "gif",
    id: "LMomqSiRZF3zi",
    url: "https://giphy.com/gifs/miami-pokazuje-radiowozu-LMomqSiRZF3zi",
    slug: "miami-pokazuje-radiowozu-LMomqSiRZF3zi",
    bitly_gif_url: "https://gph.is/1NRZcsm",
    bitly_url: "https://gph.is/1NRZcsm",
    embed_url: "https://giphy.com/embed/LMomqSiRZF3zi",
    username: "",
    source: "https://www.youtube.com/watch?v=HzED9ocIUos",
    title: "moon GIF",
    rating: "g",
    content_url: "",
    source_tld: "www.youtube.com",
    source_post_url: "https://www.youtube.com/watch?v=HzED9ocIUos",
    is_sticker: 0,
    import_datetime: "2015-04-16 19:51:06",
    trending_datetime: "0000-00-00 00:00:00",
    images: {
      downsized_large: {
        height: "388",
        size: "133056",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.gif",
        width: "388"
      },
      fixed_height_small_still: {
        height: "100",
        size: "5037",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/100_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100_s.gif",
        width: "100"
      },
      original: {
        frames: "5",
        hash: "2c36c93a0d5830b28946a114f236bf3a",
        height: "388",
        mp4:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.mp4",
        mp4_size: "95831",
        size: "133056",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.gif",
        webp:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.webp",
        webp_size: "57626",
        width: "388"
      },
      fixed_height_downsampled: {
        height: "200",
        size: "36382",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200_d.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200_d.gif",
        webp:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200_d.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200_d.webp",
        webp_size: "24634",
        width: "200"
      },
      downsized_still: {
        height: "388",
        size: "77856",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy_s.gif",
        width: "388"
      },
      fixed_height_still: {
        height: "200",
        size: "19812",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200_s.gif",
        width: "200"
      },
      downsized_medium: {
        height: "388",
        size: "133056",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.gif",
        width: "388"
      },
      downsized: {
        height: "388",
        size: "133056",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.gif",
        width: "388"
      },
      preview_webp: {
        height: "348",
        size: "49016",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy-preview.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-preview.webp",
        width: "348"
      },
      original_mp4: {
        height: "478",
        mp4:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy.mp4",
        mp4_size: "95831",
        width: "480"
      },
      fixed_height_small: {
        height: "100",
        mp4:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/100.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100.mp4",
        mp4_size: "7706",
        size: "12083",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/100.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100.gif",
        webp:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/100.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100.webp",
        webp_size: "6792",
        width: "100"
      },
      fixed_height: {
        height: "200",
        mp4:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200.mp4",
        mp4_size: "25387",
        size: "36382",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200.gif",
        webp:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200.webp",
        webp_size: "21464",
        width: "200"
      },
      downsized_small: {
        height: "388",
        mp4:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy-downsized-small.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-downsized-small.mp4",
        mp4_size: "76576",
        width: "388"
      },
      preview: {
        height: "312",
        mp4:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy-preview.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-preview.mp4",
        mp4_size: "33644",
        width: "312"
      },
      fixed_width_downsampled: {
        height: "200",
        size: "36382",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200w_d.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w_d.gif",
        webp:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200w_d.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w_d.webp",
        webp_size: "24634",
        width: "200"
      },
      fixed_width_small_still: {
        height: "100",
        size: "5037",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/100w_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100w_s.gif",
        width: "100"
      },
      fixed_width_small: {
        height: "100",
        mp4:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/100w.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100w.mp4",
        mp4_size: "7706",
        size: "12083",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/100w.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100w.gif",
        webp:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/100w.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=100w.webp",
        webp_size: "6792",
        width: "100"
      },
      original_still: {
        height: "388",
        size: "77856",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy_s.gif",
        width: "388"
      },
      fixed_width_still: {
        height: "200",
        size: "19812",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200w_s.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w_s.gif",
        width: "200"
      },
      looping: {
        mp4:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy-loop.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-loop.mp4",
        mp4_size: "2089148"
      },
      fixed_width: {
        height: "200",
        mp4:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200w.mp4?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w.mp4",
        mp4_size: "25387",
        size: "36382",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200w.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w.gif",
        webp:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/200w.webp?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200w.webp",
        webp_size: "21464",
        width: "200"
      },
      preview_gif: {
        height: "138",
        size: "49423",
        url:
          "https://media1.giphy.com/media/LMomqSiRZF3zi/giphy-preview.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=giphy-preview.gif",
        width: "138"
      },
      "480w_still": {
        url:
          "https://media4.giphy.com/media/LMomqSiRZF3zi/480w_s.jpg?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=480w_s.jpg",
        width: "480",
        height: "480"
      }
    },
    analytics: {
      onload: {
        url:
          "https://giphy-analytics.giphy.com/simple_analytics?response_id=63df9eaa9bc4a541578f422141f9c76dec91578c&event_type=GIF_SEARCH&gif_id=LMomqSiRZF3zi&action_type=SEEN"
      },
      onclick: {
        url:
          "https://giphy-analytics.giphy.com/simple_analytics?response_id=63df9eaa9bc4a541578f422141f9c76dec91578c&event_type=GIF_SEARCH&gif_id=LMomqSiRZF3zi&action_type=CLICK"
      },
      onsent: {
        url:
          "https://giphy-analytics.giphy.com/simple_analytics?response_id=63df9eaa9bc4a541578f422141f9c76dec91578c&event_type=GIF_SEARCH&gif_id=LMomqSiRZF3zi&action_type=SENT"
      }
    }
  }
];

const mockedPixabayAnswer = [
  {
    largeImageURL:
      "https://pixabay.com/get/57e8d04a4c53aa14f6da8c7dda79367b143fd7e156586c4870277bd29f48c359b8_1280.jpg",
    webformatHeight: 426,
    webformatWidth: 640,
    likes: 1428,
    imageWidth: 5280,
    id: 1859616,
    user_id: 289667,
    views: 569626,
    comments: 128,
    pageURL:
      "https://pixabay.com/photos/moon-full-moon-sky-nightsky-lunar-1859616/",
    imageHeight: 3520,
    webformatURL:
      "https://pixabay.com/get/57e8d04a4c53aa14f6da8c7dda79367b143fd7e156586c4870277bd29f48c359b8_640.jpg",
    type: "photo",
    previewHeight: 99,
    tags: "moon, full moon, sky",
    downloads: 326100,
    user: "rkarkowski",
    favorites: 1440,
    imageSize: 2252697,
    previewWidth: 150,
    userImageURL: "",
    previewURL:
      "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_150.jpg"
  },
  {
    largeImageURL:
      "https://pixabay.com/get/51e3d34b4d55b108f5d084609629327f1536dae05a4c704c7d2f7ddc924bc458_1280.jpg",
    webformatHeight: 427,
    webformatWidth: 640,
    likes: 1254,
    imageWidth: 1920,
    id: 736877,
    user_id: 909086,
    views: 313270,
    comments: 147,
    pageURL:
      "https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/",
    imageHeight: 1282,
    webformatURL:
      "https://pixabay.com/get/51e3d34b4d55b108f5d084609629327f1536dae05a4c704c7d2f7ddc924bc458_640.jpg",
    type: "photo",
    previewHeight: 100,
    tags: "tree, cat, silhouette",
    downloads: 111220,
    user: "Bessi",
    favorites: 1052,
    imageSize: 97150,
    previewWidth: 150,
    userImageURL:
      "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg",
    previewURL:
      "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg"
  }
];

jest.mock("./../requester", () => ({
  requester: function(url) {
    return Promise.resolve({
      json: () =>
        Promise.resolve([
          mockedPixabayAnswer[0],
          mockedGiphyAnswer[0],
          mockedPixabayAnswer[1],
          mockedGiphyAnswer[1]
        ])
    });
  }
}));

jest.mock("./../debounce", () => ({
  debounce: function(func) {
    return func;
  }
}));

jest.mock("./../delayer", () => ({
  delayer: function(func) {
    return func();
  }
}));

jest.mock("./../getTimeDifference", () => ({
  getTimeDifference: function(time) {
    return 1000000;
  }
}));

describe("Gif system", () => {
  it("should simply be rendered", async () => {
    const wrapper = await mount(<GifSystem />);
    await flushPromises();
    expect(wrapper.find("input").length).toEqual(1);
    wrapper.unmount();
  });
});

describe("Gif system", () => {
  it("should show images by request", async () => {
    const wrapper = await mount(<GifSystem />);
    await flushPromises();
    const input = wrapper.find("input").first();

    input.simulate("change", { target: { value: "Moon" } });
    await flushPromises();
    await wrapper.update();
    await flushPromises();

    expect(wrapper.find('div[className="images-container"] div').length).toBe(
      4
    );
    expect(
      wrapper.find('div[className="images-container"] div').map(x => x.props())
    ).toEqual([
      {
        className: "pixabay-image",
        style: {
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_150.jpg)",
          height: 99,
          width: 150
        }
      },
      {
        className: "giphy-image",
        style: {
          backgroundImage:
            "url(https://media1.giphy.com/media/FWtVYDHIxgGgE/200_d.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200_d.gif)",
          height: "200",
          width: "356"
        }
      },
      {
        className: "pixabay-image",
        style: {
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg)",
          height: 100,
          width: 150
        }
      },
      {
        className: "giphy-image",
        style: {
          backgroundImage:
            "url(https://media1.giphy.com/media/LMomqSiRZF3zi/200_d.gif?cid=5b91764163df9eaa9bc4a541578f422141f9c76dec91578c&rid=200_d.gif)",
          height: "200",
          width: "200"
        }
      }
    ]);

    wrapper.unmount();
  });
});
