import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    this.setState({tweets: this.props.newTweets})
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps, nextState){
    // console.log(`nextProps from TweetWall`, nextProps)
    // console.log(`nextState from TweetWall`, nextState)
    return nextProps.newTweets.length > 0

  }

  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    // console.log(`nextprops from tweetWall`, nextProps)
    this.setState({
      tweets: [
        ...nextProps.newTweets, 
        ...this.state.tweets
      ]

    })
    
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
