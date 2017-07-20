// this file is serving as our parent component

import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./search-bar";
import VideoDetail from "./video-detail";

const API_KEY = "AIzaSyDeSwe-1qvGVI71zurnjpm83piWAQoa_N4";

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch("anish kapoor 'decension' solo show");
	}
	videoSearch(term) {
		YTSearch( {
			key: API_KEY, 
			term: term
		}, 
		(videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1800);

		return (
			<div>
			<h1>WHAT DOES YOUR LIFE HOLD? </h1>
			<h4></h4>
			<p>For those of whom who may have not heard of it,</p><p> The Bucket List,
			is a list of tasks a person aspires to try before they, you know,
			"kick the bucket".</p><p> You should ask those questions, What do you love? What gives you a thrill?
			Discover and create your own list. </p><p>I won't hold you to it, so
			maybe part of this is a, "wish list", but hey, keep on dreaming, dreamers.</p>

				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
			</div>
		);
	}
};


export default Video;
