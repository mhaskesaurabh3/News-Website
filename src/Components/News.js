import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Eric Levenson and Brad Parks, CNN",
            "title": "Jurors to begin third day of deliberations in Kyle Rittenhouse's homicide trial a day after rewatching drone video key to defense's mistrial request - CNN",
            "description": "The jury is set to enter its third day of deliberations in Kyle Rittenhouse's homicide trial on Thursday for charges related to the fatal shooting of two people and the wounding of another during last year's unrest in Kenosha, Wisconsin.",
            "url": "https://www.cnn.com/2021/11/18/us/kyle-rittenhouse-trial-thursday/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211115124245-04-rittenhouse-trial-1115-super-tease.jpg",
            "publishedAt": "2021-11-18T12:26:00Z",
            "content": "(CNN)The jury is set to enter its third day of deliberations in Kyle Rittenhouse's homicide trial on Thursday for charges related to the fatal shooting of two people and the wounding of another durin… [+5189 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Arjun Kharpal",
            "title": "Alibaba misses expectations as earnings plunge 38% in the September quarter - CNBC",
            "description": "Alibaba has been a victim of China's crackdown on its technology industry which has seen a slew of new regulation brought in from antitrust to data protection.",
            "url": "https://www.cnbc.com/2021/11/18/alibaba-earnings-fiscal-q2-revenue-misses-earnings-plunge.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106974602-1636685905693-gettyimages-1236474684-CHINA_ALIBABA.jpeg?v=1636685994",
            "publishedAt": "2021-11-18T11:41:33Z",
            "content": "Signage for Alibaba Group Holding Ltd. displayed at the company's headquarters in Hangzhou, China, on Wednesday, Nov. 10, 2021. Alibaba's annual 11.11 Singles' Day online shopping bonanza, one that d… [+3928 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Iraqis check in for flight home after failing to enter EU from Belarus - Reuters",
            "description": "Hundreds of Iraqis who have camped for weeks at Belarus' borders with the EU checked in for a flight back to Iraq on Thursday, the Iraqi foreign ministry said.",
            "url": "https://www.reuters.com/world/iraqis-check-flight-home-after-failed-attempts-get-into-eu-2021-11-18/",
            "urlToImage": "https://www.reuters.com/resizer/JRJT2xfhCWX6VOHzfyDQ9jw-_3o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TXGBY7OSPRJVROU6J5ZA6GHWAA.jpg",
            "publishedAt": "2021-11-18T10:56:00Z",
            "content": "BAGHDAD, Nov 18 (Reuters) - Hundreds of Iraqis who have camped for weeks at Belarus' borders with the EU checked in for a flight back to Iraq on Thursday, the Iraqi foreign ministry said.\r\nSome 430 m… [+2012 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Diksha Madhok, CNN Business",
            "title": "Warren Buffett-backed Paytm crashes 27% after milestone IPO for India - CNN",
            "description": "It's turning into a monumental year for India's stock market, as yet another big startup makes its public debut.",
            "url": "https://www.cnn.com/2021/11/18/investing/paytm-price-listing-india-ipo-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211116054316-01-paytm-india-110821-file-super-tease.jpg",
            "publishedAt": "2021-11-18T10:43:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": null,
            "title": "Head lice are spreading again, despite physical distancing at schools : Shots - Health News - NPR",
            "description": "With kids back in school, business is picking back up for professional delousers. But how are kids getting head lice if they're physically distancing in the classroom?",
            "url": "https://www.npr.org/sections/health-shots/2021/11/18/1056737280/pandemic-or-no-kids-are-still-getting-and-spreading-head-lice",
            "urlToImage": "https://media.npr.org/assets/img/2021/11/17/lice6_wide-0d2823d09db94f6d35e8ccf4b3d21340fd8fd604.jpg?s=1400",
            "publishedAt": "2021-11-18T10:00:22Z",
            "content": "LiceDoctors technician Linda Holmes checks the heads of everyone in the Marker family for lice, including preschooler Hudson. It cost more than $200 to get the four-person household checked eyebrows … [+6389 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "Scott Bland, Ally Mutnick",
            "title": "When politicians make the maps, winning is easy — or impossible - POLITICO",
            "description": "In states where legislators drew the lines this decade, nearly 90 percent of congressional races were easy wins for one party or the other.",
            "url": "https://www.politico.com/news/2021/11/18/redistricting-house-congressional-maps-522862",
            "urlToImage": "https://static.politico.com/bb/ce/58d872bd461ead2e4cb738b69afe/20211117-redistricting-alabama-ap-773.jpg",
            "publishedAt": "2021-11-18T09:31:20Z",
            "content": "Yes, some of the most apocalyptic redistricting predictions of recent years have been found wanting many Democrats said theyd never win the House again until they got new maps after 2020; then along … [+5749 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Katia Hetter, CNN",
            "title": "How to prepare for another winter of Covid-19? An expert weights in - CNN",
            "description": "CNN Medical Analyst Dr. Leana Wen shares what vaccines you should get as well as other tips to safe safe from Covid-19 in the coming months.",
            "url": "https://www.cnn.com/2021/11/18/health/winter-covid-precautions-dr-wen-wellness/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211117153202-winter-covid-precautions-file-2020-new-york-restricted-super-tease.jpg",
            "publishedAt": "2021-11-18T09:19:00Z",
            "content": "(CNN)Winter is almost here. After weeks of steady decline, Covid-19 cases appear to be on the rise again. \r\nIs a surge inevitable? How should families think about the winter ahead? What can they do t… [+5544 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "Lee Moran",
            "title": "Camila Cabello And Shawn Mendes Split: 'End Of Our Romantic Relationship' - HuffPost",
            "description": "The “Señorita\" singers said they'll \"continue to be best friends.\"",
            "url": "https://www.huffpost.com/entry/camila-cabello-shawn-mendes-split_n_61960795e4b0f398af002cea",
            "urlToImage": "https://img.huffingtonpost.com/asset/61960e4121000031916ff82f.jpeg?cache=DMn1uhumKV&ops=1778_1000",
            "publishedAt": "2021-11-18T08:32:42Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Associated Press",
            "title": "Exonerations for 2 men convicted in Malcolm X's 1965 death - Fox News",
            "description": "Two men who for decades steadfastly maintained their innocence in the 1965 assassination of civil rights icon Malcolm X are set to be exonerated Thursday, after a nearly two-year-long re-investigation.",
            "url": "https://www.foxnews.com/us/exonerations-2-men-convicted-malcolm-x-1965-death",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/AP21321701116788.jpg",
            "publishedAt": "2021-11-18T07:51:11Z",
            "content": "Two men who for decades steadfastly maintained their innocence in the 1965 assassination of civil rights icon Malcolm X are set to be exonerated Thursday, after a nearly two-year-long re-investigatio… [+1822 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Peng Shuai: Doubt cast on email from Chinese tennis star - BBC News",
            "description": "Peng Shuai has not been heard from since she made sexual assault allegations against a top Chinese official.",
            "url": "https://www.bbc.com/news/world-asia-china-59325399",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/180C3/production/_121599489_gettyimages-1171703484.jpg",
            "publishedAt": "2021-11-18T07:19:17Z",
            "content": "Image source, Getty Images\r\nImage caption, An email allegedly from Ms Peng denied she was missing\r\nThe head of the Women's Tennis Association (WTA) has cast doubt on an email released by Chinese stat… [+3577 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WSB Atlanta"
            },
            "author": "Theresa Seiger and Bob D'Angelo, Cox Media Group National Content Desk",
            "title": "Rapper Young Dolph killed in shooting in Memphis - WSB Atlanta",
            "description": "A shooting in Tennessee claimed the life Wednesday of rapper Young Dolph, WHBQ-TV reported",
            "url": "https://www.wsbtv.com/news/trending/rapper-young-dolph-killed-shooting-memphis-report-says/YREFOO2GVBFNXEOREFWKTJ4ZPA/",
            "urlToImage": "https://cmg-cmg-tv-10010-prod.cdn.arcpublishing.com/resizer/CZLylIQUwo73X15novUyK_Oltx0=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/XGXFW2EBINDWTHY24AN25Z2TVA.jpg",
            "publishedAt": "2021-11-18T07:06:50Z",
            "content": "MEMPHIS, Tenn. — A shooting in Memphis claimed the life Wednesday of rapper Young Dolph, WHBQ-TV reported, citing unidentified law enforcement sources.\r\n&gt;&gt; Read more trending news\r\nThe shooting… [+2482 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Hari Kumar, Emily Schmall",
            "title": "India's Toxic Air Pollution Prompts Supreme Court to Act - The New York Times",
            "description": "Schools and factories close. India’s Supreme Court blasts the government’s do-nothing response. But Delhi residents continue to suffer from the bad air.",
            "url": "https://www.nytimes.com/2021/11/18/world/asia/india-new-delhi-pollution.html",
            "urlToImage": "https://static01.nyt.com/images/2021/11/18/world/18india-pollution-1/18india-pollution-1-facebookJumbo.jpg",
            "publishedAt": "2021-11-18T07:01:03Z",
            "content": "Can we vacuum our air pollution problem using smog towers? The short answer is no, the researchers said.\r\nStill, they are a tempting refuge for people desperate to escape the citys bad air.\r\nAs a cop… [+879 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The A.V. Club"
            },
            "author": "William Hughes",
            "title": "Pam & Tommy fall into Seth Rogen's skeezy clutches in the first trailer for FX series - The A.V. Club",
            "description": "Lily James and Sebastian Stan look eerily similar to '90s-era Pamela Anderson and Tommy Lee",
            "url": "https://www.avclub.com/pam-tommy-fall-into-seth-rogens-skeezy-clutches-in-th-1848080774",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/db478567a9aa476ee13332f3d63fa9fb.jpg",
            "publishedAt": "2021-11-18T06:48:00Z",
            "content": "It feels telling that the first person we see in the first official trailer for Pam &amp; TommyCraig Gillespies new Hulu series about the Pamela Anderson/Tommy Lee sex tapeis neither Lily James as An… [+1713 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "Fiona MacDonald",
            "title": "An Epic Lunar Eclipse Is Coming Tomorrow – The Longest of Its Kind in 580 Years - ScienceAlert",
            "description": "Space lovers are in for a treat this week. Late Thursday night and into the early hours of Friday morning (in terms of US time zones), you'll have the chance to witness the longest partial lunar eclipse in 580 years.",
            "url": "https://www.sciencealert.com/an-epic-lunar-eclipse-is-coming-tomorrow-the-longest-of-its-kind-in-580-years",
            "urlToImage": "https://www.sciencealert.com/images/2021-11/processed/PartialLunarEclipse_1024.jpg",
            "publishedAt": "2021-11-18T06:16:18Z",
            "content": "Space lovers are in for a treat this week. Late Thursday night and into the early hours of Friday morning (in terms of US time zones), you'll have the chance to witness the longest partial lunar ecli… [+4917 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "British Columbia sees death toll rising from massive flood; Ottawa pledges aid - Reuters Canada",
            "description": "The death toll from massive floods and landslides that devastated parts of British Columbia is set to rise, with the Canadian province declaring a state of emergency on Wednesday and the federal government promising major help.",
            "url": "https://www.reuters.com/world/americas/canada-province-mulls-state-emergency-after-floods-food-shortages-reported-2021-11-17/",
            "urlToImage": "https://www.reuters.com/resizer/v1cVqfiOX6D61YsZUq82XxOIiuk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IXAQTOCIPZI6NGUYQB6I3NBMCI.jpg",
            "publishedAt": "2021-11-18T06:00:00Z",
            "content": "ABBOTSFORD, British Columbia, Nov 17 (Reuters) - The death toll from massive floods and landslides that devastated parts of British Columbia is set to rise, with the Canadian province declaring a sta… [+4556 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "Michelle Starr",
            "title": "Famous Discovery of Four-Legged Snake Fossil Turns Out to Have a Twist in The Tale - ScienceAlert",
            "description": "In 2015, paleontologists announced a stunning discovery. Preserved in Cretaceous rock from Brazil was the complete skeleton of a beast resembling a snake, but with one significant addition: four tiny, almost vestigial legs.",
            "url": "https://www.sciencealert.com/this-famous-four-legged-snake-fossil-is-something-else-after-all",
            "urlToImage": "https://www.sciencealert.com/images/2021-11/processed/tetrapodophis-artistic-reconstruction_1024.jpg",
            "publishedAt": "2021-11-18T05:58:14Z",
            "content": "In 2015, paleontologists announced a stunning discovery. Preserved in Cretaceous rock from Brazil was the complete skeleton of a beast resembling a snake, but with one significant addition: four tiny… [+4012 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Kenneth Garger",
            "title": "Vials labeled ‘Smallpox’ discovered in Pennsylvania lab freezer - New York Post",
            "description": "Frozen vials labeled “Smallpox” were recently discovered by a laboratory worker at a Pennsylvania facility that conducts vaccine research, federal officials said.",
            "url": "https://nypost.com/2021/11/18/vials-labeled-smallpox-discovered-in-pennsylvania-lab-freezer/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/11/smallpox-vials-found-index.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-11-18T05:42:00Z",
            "content": "Frozen vials labeled Smallpox were recently discovered by a laboratory worker at a Pennsylvania facility that conducts vaccine research, federal officials said.\r\nThe vials were found while the worker… [+1068 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "'My Voice Was Muted': Britney Spears Speaks Out Post-Conservatorship - NBC News",
            "description": "Singer Britney Spears thanked her fans for the \"Free Britney\" movement and called her conservatorship \"demoralizing and degrading,\" while speaking out on soc...",
            "url": "https://www.youtube.com/watch?v=QWh2OtVSBzQ",
            "urlToImage": "https://i.ytimg.com/vi/QWh2OtVSBzQ/maxresdefault.jpg",
            "publishedAt": "2021-11-18T05:30:03Z",
            "content": null
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Sam Mcneil",
            "title": "Hate speech in Myanmar continues to thrive on Facebook - Associated Press",
            "description": "JAKARTA, Indonesia (AP) — Years after coming under scrutiny for contributing to ethnic and religious violence in Myanmar, Facebook still has problems detecting and moderating hate speech and misinformation on its platform in the Southeast Asian nation, intern…",
            "url": "https://apnews.com/a38da3ccd40ffae7e4caa450c374f796",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/1975dd3115c74d74bf4904b321d7bb89/3000.jpeg",
            "publishedAt": "2021-11-18T05:24:07Z",
            "content": "JAKARTA, Indonesia (AP) Years after coming under scrutiny for contributing to ethnic and religious violence in Myanmar, Facebook still has problems detecting and moderating hate speech and misinforma… [+11185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Emmanuel Morgan",
            "title": "NFL Week 11 Picks Against The Spread - The New York Times",
            "description": "Mac Jones will try to push the Patriots to top of the A.F.C. East, Cam Newton and the Panthers can muck up the N.F.C. South, and Patrick Mahomes will try to prove Kansas City’s troubles are over.",
            "url": "https://www.nytimes.com/2021/11/18/sports/football/nfl-week-11-picks.html",
            "urlToImage": "https://static01.nyt.com/images/2021/11/18/sports/18nfl-matchups-jones/18nfl-matchups-jones-facebookJumbo.jpg",
            "publishedAt": "2021-11-18T05:01:07Z",
            "content": "Detroit Lions at Cleveland Browns, 1 p.m., Fox\r\nLine: Browns -10 | Total: 45\r\nBaker Mayfield has had an up-and-down campaign for a contract extension and is trending downward. The Browns (5-5) are la… [+2689 chars]"
        }
    ]
    static defaultProps = {
        country: "in",
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    constructor(props) {
        super(props)
        console.log("Hello I am a constructor from News component ");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title = `${this.props.category} -NewsMonkey`;
    }

    async updateNews() {
        this.state.setProgress = (10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b819defa3f7f4b38b2d93c371a0707cd&page=${this.state.page}&pageSize=20`;
        let data = await fetch(url);
        this.state.setProgress = (30);
        let parsedData = await data.json()
        this.state.setProgress = (70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        this.state.setProgress = (100);
    }



    async componentDidMount() {
        this.updateNews();
    }
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews()

    }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews()

    }
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{ margin: '18px 0px' }}>Welcome to NewsMonkey </h2>
                <div className="row" >
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 39) : ""} description={element.description ? element.description.slice(0, 105) : ""} imageUrl={element.urlToImage} newsUrl={element.url}
                                author={element.author} date={element.publishedAt} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>
                    <button disabled={this.state.page >= 4} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;
