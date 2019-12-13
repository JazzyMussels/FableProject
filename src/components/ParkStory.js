import React from 'react';
import '../css/ParkStory.css'
import {NavLink} from 'react-router-dom'
import Book from 'react-page-flip'

export default class ParkStory extends React.Component {

    constructor(props){
        super(props);
        this.state={
            showCategories: false,
            showDirection: false,
            selectedCategory: null,
            current_quote: null,
            choice1: null,
            choice2: null,
            prepGluttonEnding: false,
            engageGluttonEnding: false,
            theEnd: false,
            goToPark: false,
            goToTrailer: false,
            prepEvilPath: false,
            prepKindPath: false,
            engageEvilPath: false,
            engageKindPath: false,
            goToHumblePath: false,
            goToDarkPath: false,
            prepFastPath: false,
            prepSlowPath: false,
            goToFastPath: false,
            goToSlowPath: false,


        }
    }

    showCategorySelector = (first, second) => {
        this.setState({
            showCategories: true,
            choice1: first,
            choice2: second
        })
    };

    showDirectionSelector = (first, second) => {
      this.setState({
          showDirection: true,
          choice1: first,
          choice2: second
      })
  };

    displayQuoteChoices = (first, second) => {
        if (this.state.showCategories) { 
          return(
          <div className='category-picker'>
            <p className='chalkboard-text-header'>Choose A Category<br></br></p>
            <p className='underline'>________</p>
            <br></br>
            <p className='chalkboard-text-choice-1' onClick={() => this.makeChoice(this.props.quotes.filter(quote => quote.category === first.toLowerCase() ))}>{first}</p>
            <br></br>
            <p className='or'>OR</p>
            <br></br>
            <p className='chalkboard-text-choice-2 ' onClick={() => this.makeChoice(this.props.quotes.filter(quote => quote.category === second.toLowerCase() ))}>{second}</p>
          </div>
          )
        }
    }

    displayStoryChoices = (first, second) => {
      if (this.state.showDirection) { 
        return(
        <div className='category-picker'>
          <p className='chalkboard-text-header'>Choose A Category<br></br></p>
          <p className='underline'>________</p>
          <br></br>
          <p className='chalkboard-text-choice-1' onClick={() => this.pickPath(first)}>{first}</p>
          <br></br>
          <p className='or'>OR</p>
          <br></br>
          <p className='chalkboard-text-choice-2' onClick={() => this.pickPath(second)}>{second}</p>
        </div>
        )
      }
  }

  pickPath = (category) => {
    if (category === 'PARK') {
    this.setState({
      goToPark: true,
      showDirection: false,
      
    })
  }
  else if (category === 'TRAILER PARK') {
    this.setState({
      goToTrailer: true,
      showDirection: false
    })
  }
  else if (category === 'DARKNESS') {
    this.setState({
      goToDarkPath: true,
      showDirection: false
    })
  }
  else if (category === "HUMILITY") {
    this.setState({
      goToHumblePath: true,
      showDirection: false
    })
  }
  else if (category === "FAST") {
    this.setState({
      prepFastPath: true,
      showDirection: false
    })
  }
  else if (category === "SLOW") {
    this.setState({
      prepSlowPath: true,
      showDirection: false
    })
  }
  }

    getRandomQuote = (category) => {
      let selectedQuote = category[Math.floor(Math.random() * category.length)]
      return selectedQuote.content
  }

    makeChoice = (category) => {
        this.setState({
            current_quote: this.getRandomQuote(category),
            showCategories: false,
            selectedCategory: category[0].category
        })
        if (category[0].category === 'gluttony'){
          this.setState({
            prepGluttonEnding: true
          })
        }
        else if (category[0].category === 'evil') {
          this.setState({
            prepEvilPath: true
          })
        }
        else if (category[0].category === 'helpful') {
          this.setState({
            prepKindPath: true
          })
        }
    }

   engagePartTwo = () => {
     if (this.state.prepGluttonEnding) {
       this.setState({
         engageGluttonEnding: true
       })
     } 
     else {
       this.setState({
         engageDiet: true
       })
     }
   }


   engageTheEnd = () => {
     this.setState({
       theEnd: true
     })
   }

   engageEvilOrKind = () => {
     if (this.state.prepEvilPath){
       this.setState({
         engageEvilPath: true
       })
     }
     else {
       this.setState({
         engageKindPath: true
       })
     }

   }

   engageFastOrSlow = () => {
     if (this.state.prepFastPath){
       this.setState({
         goToFastPath: true
       })
     }
     else{
       this.setState({
         goToSlowPath: true
       })
     }
   }

   returnToChoose = () => {
     if (this.state.theEnd) {
       return(
         <div className='back-to-choose'>
             <p className='chalkboard-text-header'>Where To Now?<br></br></p>
            <p id='underline'>________</p>
            <br></br>
            <p className='end-chalkboard-text-choice-1'><NavLink to='/rate'>RATE THIS</NavLink></p>
            <br></br>
            <p id='end-or'>OR</p>
            <br></br>
            <p className='end-chalkboard-text-choice-2'><NavLink to='/new'>START FRESH</NavLink></p>
        </div>
       )
     }
   }
 

    render(){
      console.log(this.state.selectedCategory)
    
        return (
    <div className='shelf-bg'>

               {this.displayQuoteChoices(this.state.choice1, this.state.choice2)}
               {this.displayStoryChoices(this.state.choice1, this.state.choice2)}


        <div className="park-story-book">
    
     <Book width='880px' height='523px'>     

        <Book.Page> 
          <Book.Side>
            <article className='page'>
              <img src={require('../images/ParkCoverLg.png')} alt='park' onClick={() => this.showCategorySelector('DEATH', "CHRISTIAN")}/>
            </article>
          </Book.Side>

          <Book.Side>
            <article className='page'>
                <p className='text-box'>
                    The clock on Little Billy's table went 'BUZZZ! BUZZZ!' He sat up in his bed and yawned. He was still sleepy. 
                     He walked to his window and looked out. There was snow everywhere! He said: 
                </p>
            </article>
          </Book.Side>
        </Book.Page>

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='quote-text-box'>
                    {this.state.current_quote ? `"${this.state.current_quote}"` : null}
                </p>
                {this.state.selectedCategory === 'death' ?
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/3o6Ztj160BEqLidM7S/giphy.gif' alt='death'></img>
                :
                null
                }
                {this.state.selectedCategory === 'christian' ?
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/l2YWpKW3PmdvotNKw/giphy.gif' alt='church'></img>
              :
              null
              }
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy shook his little head and said, "Better keep those thoughts to myself!" He looked at the calendar 
                    Mommy made him and saw that it was Saturday. 'Hey! It's Saturday! That means no school today! 
                </p>
            </article>
          </Book.Side>
        </Book.Page>

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showCategorySelector("SUFFERING", "FEMINISM")}>
                <p className='text-box'>
                    Feeling very excited, and not even a 
                    little bit sleepy anymore, he ran downstairs.
                    Mommy was in the kitchen making breakfast. Pancakes! Pancakes were Little Billy's favorite! 
                    It smelled yum-yum-yummy! 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    'Good morning Pumpkin!', Mommy said. 'It's very snowy outside! What do you want to do?' 
                    Little Billy began talking very fast. He had big plans, and each one sounded so much fun. 
                </p>
            </article>
          </Book.Side>
        </Book.Page>

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    'That's nice, dear', Mommy said. But, as adults usually do when children are yapping away, 
                    she wasn't listening. She was lost in thought, and mumbled: 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='quote-text-box'> 
                    {this.state.current_quote ? `"${this.state.current_quote}"` : null}
                </p>
                {this.state.selectedCategory === 'suffering' ?
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/5xaOcLCp8sxC25mCwec/giphy.gif' alt='depression'></img>
                :
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/3ohc0RGbTHc6TsFcbe/giphy.gif' alt='feminism'></img>
                }
            </article>
          </Book.Side>
        </Book.Page>     

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showCategorySelector("GLUTTONY", "MODERATION")}>
                <p className='text-box'>
                    Billy stopped eating and looked at her. Mommy was being weird again! She did not seem to care that Little Billy
                    was still there. He decided it was better not to ask questions,
                    because sometimes questions made Mommy very mad. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Mommy poured some special Mommy juice into her cup of coffee. Little Billy thought
                    coffee smelled very good, but after Mommy put her special juice into it, 
                    he thought it smelled very yucky.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.engagePartTwo()}>
                <p className='text-box'>
                    It also made Mommy act very funny, and Little Billy did not like that.
                    He wanted to get the heck out of there, but he had a full plate of food. He thought about what 
                    Daddy said about eating before he went out for Milk and Cigarettes last week: 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='quote-text-box'> 
                    "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                {this.state.selectedCategory === 'gluttony' ?
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/xXud4DaGlJoRy/giphy.gif' alt='gluttony'></img>
                :
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/apKGAQh7saobC/giphy.gif' alt='feminism'></img>
                }
            </article>
          </Book.Side>
        </Book.Page> 
        </Book>

{/* GLUTTON ENDING */}

            { (this.state.engageGluttonEnding) ? (
              <div className="park-story-book-glutton-end">
              <Book width='880px' height='523px'>

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showCategorySelector("ABSURD", "SADNESS")}>
                <p className='text-box'>
                   He listened to Daddy and crammed pancakes into his chubby little cheeks as fast as he could. He was so excited. 
                   Pancakes, Snow, Saturday. It was perfect! Well, almost perfect! Suddenly, Little Billy could not breathe.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                 There were sweet syrupy pancakes clogging up his pipes! He was choking to death! If he had a mirror, he would see 
                 that he was turning P. U. R. P. L. E. - purple! He tried to call Mommy, but the pancakes were stuck in his 
                 throat. He could not talk!
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Mommy did not see Little Billy. She was staring out the window with that
                    far away look in her eyes that grownups always have. She finally turned around when she heard 
                    Little Billy's body crash to the floor!
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    'Little Billy,' she shouted! She rolled him over onto his Little big belly. She pounded on his chest, 
                    not knowing what to do. Sadly, it was too late. The pancakes had gotten the best of Little Billy.
                    
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='quote-text-box'>
                Mother cried  out, "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/YLgIOmtIMUACY/giphy.gif' alt='sadness'></img>       
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    She held the pitiful, lifeless carcass of her first born son, Little Billy. She
                    wished only that she had taught her son not to eat so fast, because:
                </p>
                <p className='race-tag-line-park-evil'> SLOW AND STEADY WINS THE RACE.</p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.engageTheEnd()}>
                <img className="animated-gif" src='https://media1.giphy.com/media/fR4qnTFfX41nMWpwpx/200.webp?cid=790b76118e8d6e55e739a02619d0c6545cd3d0e40105006d&rid=200.webp' alt='choke'></img>
                <p className='race-end-tag-line'>THE END</p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <img src={require('../images/back_cover.png')} alt='park'/>
            </article>
          </Book.Side>
        </Book.Page> 
        </Book>
              {this.returnToChoose()}
              </div>
            )
          :
          null 
            }

    {/* DIET CONTINUE */}

            {this.state.engageDiet ? 
            <div className="park-story-book-glutton-end">
              <Book width='880px' height='523px'>
        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showDirectionSelector('PARK', "TRAILER PARK")}>
                <p className='text-box'>
                    And so Little Billy took his time eating, which is a very wise thing to do. 
                    Mommy didn't talk, so Billy sat quietly and tried to decide what he
                    wanted to do first. He finally came up with two very clever ideas.    
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He could go and see his friends, who were playing in the park, or, 
                    he could go where Mommy did not allow him to go:
                    The Abandoned Trailer Park across the railroad tracks.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 
        </Book>
        </div>
        :
        null
    }

{/* PARK STORY BEGINS HERE */}

    {this.state.goToPark ? 
       <div className="park-story-book-glutton-end">
    
     <Book width='880px' height='523px'>  

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    <p className='ch-2-header'>Part II</p>  
                    <p className='ch-2-title'>Little Billy's Big Park Adventure</p>
                </p>
                <img className="animated-gif-park" src='https://media.giphy.com/media/XVqz9Ak7m3VQs/giphy.gif' alt='park'></img>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy was an obedient boy. He did not want to upset Mommy, who was crying 
                    and laughing while dancing all alone in the kitchen, so he decided to go to the park. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He grabbed his boots, and laced them up. He put on his coat,
                    a scarf, some nice warm gloves, and opened the front door out into the wide world. 
                    He yelled, 'I'm going to the park! HOORAY!'
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    It was very cold. 'BRRRR', said Little Billy. He could not wait to get to the park. He hoped there would be a
                    snowball fight!
                </p>
                <img className='animated-gif-bottom-left' src='https://media.giphy.com/media/XRlMrfDExvnyg/giphy.gif' alt='snowball'></img>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side>
            <article className='page' onClick={() => this.showCategorySelector('EVIL', "HELPFUL")}>
              <p className='text-box'>
                He could make a Snowman. 
                He could lay down in the snow and make Snow Angels.
                There were so many fun options! Little Billy saw the playground up ahead. He was close.
              </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                 He saw kids playing, unaware of how horrible there lives would later become. 
                 Little Billy was the fastest person in his class. He ran, not wanting to miss any activities. 
                He saw his friends having a footrace by the slide and said 'Hello, everyone!'
                </p>
            </article>
          </Book.Side>
        </Book.Page> 
  
        <Book.Page>
          <Book.Side>
            <article className='page' onClick={() => this.engageEvilOrKind()}>
              <p className='text-box'>
                Everyone shouted, 'Hello Little Billy!'
                There was a new girl that Billy had never seen before.
                'Who are you?,' he asked. 'I'm Becky. I'm the new kid in town,' she said. She was nervous. 
              </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
              <p className='text-box'>
                Little Billy looked her up and down. 
                She was shorter than Billy, a bit weird, 
                and one of her little legs was shorter than the other one.
              </p>
              <img className='animated-gif-bottom-left' src='https://thumbs.gfycat.com/WetViciousLamprey-size_restricted.gif' alt='snowball'></img>
            </article>
          </Book.Side>
        </Book.Page>

          </Book>
          </div>
          :
          null
          }
         
       
{/* PARK && EVIL */}

      {this.state.engageEvilPath ?
        <div className="park-story-book-glutton-end">
    
        <Book width='880px' height='523px'>  

          <Book.Page>
            <Book.Side>
              <article className='page'>
                <p className='text-box'> 
                  A mean idea came to Little Billy's mind.
                  'I think I can run faster than her! I will challenge her to a race, it will be an easy win!' 
                  Little Billy didn't even think about how Becky would feel. He said to himself:
                </p>
              </article>
            </Book.Side>
            <Book.Side>
              <article className='page' >
                <p className='quote-text-box'>
                  "{this.state.current_quote ? this.state.current_quote : null}"  
                </p>
                <img className="animated-gif-bottom-left" src='https://media.giphy.com/media/sR91D133W02D6/giphy.gif' alt='evil'></img>
              </article>
            </Book.Side>
          </Book.Page>

          <Book.Page>
            <Book.Side>
              <article className='page'>
                <p className='text-box'> 
                  His friend Carlos, overheard. He opened his eyes wide and backed away. This was a
                  side of Little Billy he had never seen, and it was scary! YIKES! To Becky, Little Billy said, 'I bet I'm faster than you, slow-poke! 
                </p>
              </article>
            </Book.Side>
            <Book.Side>
              <article className='page'>
                <p className='text-box'>
                  Are you too chicken to race me?' She got very mad. 'Don't call me names! Even if you are
                  fast, I can beat you in a race anyway.' 'NO WAY,' Little Billy said, 'let's do it!'
                </p>
              </article>
            </Book.Side>
          </Book.Page>
       
  
          <Book.Page> 
            <Book.Side>
              <article className='page'>
                <p className='text-box'> 
                  He smiled a very big smile and looked at Carlos. Years later, Carlos would remember that moment and think to himself how Little Billy's 
                  smile did not quite reach his eyes. He told his therapist all about it.
                </p>
              </article>
            </Book.Side> 
            <Book.Side>
              <article className='page'>
                <p className='text-box'>
                  Carlos said, 'I want a good clean race! 
                  First person to the big tree wins. Ready? GO!' Everyone cheered.
                  Little Billy ran fast! 
                </p>
                <img className="animated-gif-bottom-left" src='https://media1.tenor.com/images/6a3765b5b1c1e4e4ca7ea42aa7e3d551/tenor.gif?itemid=3547516' alt='evil'></img>
              </article>
            </Book.Side>
          </Book.Page> 

          <Book.Page>
            <Book.Side>
              <article className='page' onClick={() => this.showCategorySelector('CAPITALISM', "COMMUNISM")}>
                <p className='text-box'> 
                  He ran faster than he had ever run in his life, cackling maniacally 
                  just like Mommy had laughed in the kitchen at breakfast. 
                  When he was almost at the big, old tree, he looked back and saw that Becky was still by the slide. 
                </p>
              </article>
            </Book.Side>
            <Book.Side>
              <article className='page'>
                <p className='text-box'>
                  She had barely moved! She was walking, not even running! He cheered, knowing 
                  that it was impossible for him to lose. He saw his friend Juan-Pablo smoking a candy cigarette by the monkey bars.
                </p>
              </article>
            </Book.Side>
          </Book.Page>

          <Book.Page>
            <Book.Side>
              <article className='page'>
                <p className='text-box'> 
                  Little Billy thought, 'I have plenty of time. I'll take a break
                  still win this race!' He walked over to Juan-Pablo. 'Hey, 
                  Little Billy,' Juan-Pablo said. 'Care for a candy cigarette?'
                </p>
              </article>
            </Book.Side>
            <Book.Side>
              <article className='page'>
                <p className='text-box'>
                  Little Billy accepted and started puffing away. Juan Pablo was famous on the playground for his 
                  political opinions. 'Today I read something neat', Juan-Pablo said.
                </p>
              </article>
            </Book.Side>
            </Book.Page>

          <Book.Page>
            <Book.Side>
              <article className='page'>
                <p className='quote-text-box'> 
                  '{this.state.current_quote ? this.state.current_quote : null}'
                </p>
                {this.state.selectedCategory === 'capitalism' ?
                <img className="animated-gif-quote-photo" src='https://thumbs.gfycat.com/WellgroomedNeglectedFlickertailsquirrel-small.gif' alt='capitalism'></img>
                :
                <img className="animated-gif-quote-photo" src='https://media1.giphy.com/media/3jGewqNYjuPhm/giphy.gif' alt='communism'></img>
                }
              </article>
            </Book.Side>
            <Book.Side>
              <article className='page' >
                <p className='text-box'> 
                  Little Billy was 9 and did not understand, but that was not going to stop him
                  from speaking loudly about his uneducated opinion. Almost daily, he had heard Mommy say to Daddy, 'You have no idea
                  what you're talking about, Richard, so shut up!'
                </p>
              </article>
            </Book.Side>
          </Book.Page> 

          <Book.Page>
            <Book.Side>
              <article className='page'>
                <p className='text-box'>
                  This never made Daddy stop yelling, so Little Billy decided it was fine to have strong opinions even if
                  you didn't know what you were talking about. This would land him a seat in Congress when he grew up. And so Billy said:
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='quote-text-box'> 
                  {this.state.selectedCategory === 'communism' ? "That's Socialism, Lib-Tard!" : 'Smash the State, you bootlicker capitalist pig!'}
                </p>
                {this.state.selectedCategory === 'communism' ?
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/1TSUKOv4k56aIryKAP/giphy.gif' alt='trump'></img>
                :
                <img className="animated-gif-quote-photo" src='https://thumbs.gfycat.com/DiscreteDeepArabianhorse-size_restricted.gif' alt='stalin'></img>
                }
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side>
            <article className='page'>
              <p className='text-box'>
                Juan-Pablo rolled his eyes and called Little Billy a Philistine. The conversation was going nowhere. Billy thought, 'Maybe if I am 
                louder than him, I'll be more right.' But before Little Billy had a chance to talk aboout Hillary's emails, 
              </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
              <p className='text-box'> 
                he heard the other children shout, 'YAY!' Little Billy had forgotten all about the race and Becky was about to win! 
                He shouted some very bad words that he had learned from listening to Daddy. 
              </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
            <Book.Side>
              <article className='page' onClick={() => this.showCategorySelector('SUPER HERO', "VICTORY")}>
                <p className='text-box'>
                  He dropped his candy cigarette, and mashed it in the dirt with his foot. He had also learned that from watching 
                  Daddy get in his truck the day he went out for
                  Milk and Cigarettes. Little Billy took off running, hoping to catch Becky! 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                  She was still walking, lifting her little leg high and sort of dragging the littler one behind her. 
                  Little Billy might still be able to beat her! He pushed himself harder than he ever had, harder than he 
                  thought a little boy could even push. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showDirectionSelector('DARKNESS', "HUMILITY")}>
                <p className='text-box'>
                  He was gaining on her, but it was too late!
                  Becky crossed the finish line just before he did. She had won the race. With a new 
                  found sense of strength she did not know she possessed, Becky said:
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='quote-text-box'> 
                 "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                {this.state.selectedCategory === 'super_hero' ?
                <img className="animated-gif-quote-photo" src='https://i.gifer.com/PqjB.gif' alt='hero'></img>
                :
                <img className="animated-gif-quote-photo" src='https://thumbs.gfycat.com/HatefulVigilantAmericanredsquirrel-size_restricted.gif' alt='victory'></img>
                }
            </article>
          </Book.Side>
        </Book.Page> 
        </Book> 
          </div>
          :
          null
          }

      {/* PARK && EVIL && DARK  */}

      {this.state.goToDarkPath ? 

      <div className="park-story-book-glutton-end">
      <Book width='880px' height='523px'> 

        <Book.Page>
          <Book.Side>
            <article className='page'>
              <p className='text-box'>
                Billy was angry. He did not think anyone had ever felt as much rage as he did when he lost the race. 
                He began growling, almost like a doggie. Doggies go 'GRRRRRR!' when they are mad, but Little Billy shouted:
              </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
              <p className='text-box'> 
                "{this.getRandomQuote(this.props.quotes.filter(quote => quote.category === 'battle'))}"
              </p>
              <img className="animated-gif-quote-photo" src='https://media1.giphy.com/media/JITwJgOytRYYw/giphy.gif' alt='hero'></img>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side>
            <article className='page'>
              <p className='text-box'>
                All of the strength Becky found left her at once. She started crying as Billy finished his rant and charged at her. 
                She ran for real this time, crying big crocodile tears. 
              </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
              <p className='text-box'> 
                Luckily, her Mommy was on a bench nearby. 
                She ran up just in time to stop Little Billy from having to do a bid in Juvie. Becky's mommy 
                dragged Little Billy by the ear back to his house. She told his mommy exactly what had happened. 
                
              </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side>
            <article className='page'>
              <p className='text-box'>
                Little Billy was put into time out for the rest of the weekend,
                and had to stay in his room. He learned a valuable lesson that day:
              </p>
              <p className='race-tag-line-park-evil'> SLOW AND STEADY WINS THE RACE.</p>
              <p className='post-tag-line-text-box'>While this applied to the actual race he had lost,</p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
              <p className='text-box'> 
                he also sat scheming about how he would SLOWLY AND STEADILY WIN THE RACE
                of plotting his revenge against Becky. He made some mean drawings,
                but luckily Mommy found them and took him to see a therapist.
              </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side>
            <article className='page' onClick={() => this.engageTheEnd()}>
              <p className='text-box'> 
                 It worked! Little Billy became a well adjusted member of society.      
              </p>    
              <img className="animated-gif-bottom-right" src='https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif' alt='computer'></img>
              <p className='race-end-tag-line'>THE END</p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
              <img src={require('../images/back_cover.png')} alt='park'/>
            </article>
          </Book.Side>
        </Book.Page> 
        </Book>
              {this.returnToChoose()}
              </div>
            
          :
          null 
            }
  
  {/* PARK && EVIL && HUMBLE  */}

  {this.state.goToHumblePath ? 
    <div className="park-story-book-glutton-end">
    
    <Book width='880px' height='523px'> 

    <Book.Page>
      <Book.Side>
        <article className='page'>
          <p className='text-box'>
            Billy was surprised. He did not think anyone had ever felt as humble as he did when he lost that race. 
            He dropped to his knees and hung his head. His proud and boastful nature has failed him. In a small voice, he said:
          </p>
        </article>
      </Book.Side>
      <Book.Side>
        <article className='page'>
          <p className='text-box'> 
            "{this.getRandomQuote(this.props.quotes.filter(quote => quote.category === 'humility'))}"
          </p>
          <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/NSkzSW10834u4/giphy.gif' alt='hero'></img>
        </article>
      </Book.Side>
    </Book.Page> 

    <Book.Page>
      <Book.Side>
        <article className='page'>
          <p className='text-box'>
            Becky smiled at Little Billy. They had both learned something about themselves. 
            When they grew up, they got married. Becky was the first female President, and Little Billy was a professional 
            runner in the Olympics.
          </p>
        </article>
      </Book.Side>
      <Book.Side>
        <article className='page'>
          <p className='text-box'> 
            He always trained very hard, because he knew: 
            </p>
            <p className='race-tag-line-park-evil'> SLOW AND STEADY WINS THE RACE.</p>
            <p className='post-tag-line-text-box'>
            Sadly, he was later arrested on doping charges. Becky was booted out of office for being a Russian puppet. 
          </p>
          
        </article>
      </Book.Side>
      </Book.Page> 

    <Book.Page>
      <Book.Side>
        <article className='page' onClick={() => this.engageTheEnd()}>
          <p className='text-box'>
            They both got greedy in their lust for power. If only they'd remembered the moral of this story.
          </p>
          <img className="animated-gif-bottom-right" src='https://media.giphy.com/media/X8WXhnLj3ik4U/giphy.gif' alt='jail'></img>
              <p className='race-end-tag-line'>THE END</p>
        </article>
      </Book.Side>
      <Book.Side>
        <article className='page'>
            <img src={require('../images/back_cover.png')} alt='park'/>
        </article>
      </Book.Side>
    </Book.Page> 
    </Book>
    {this.returnToChoose()}
    </div>
    :
    null
    }

    {/* PARK && HELPFUL */}


    {this.state.engageKindPath ?
        <div className="park-story-book-glutton-end">
    
        <Book width='880px' height='523px'>  

        <Book.Page>
            <Book.Side>
              <article className='page'>
                <p className='text-box'> 
                  Just then, a very, very sweet idea came to Little Billy's mind.
                  Billy thought, 'She seems very nervous. It's probably because she is new. 
                </p>
              </article>
            </Book.Side>
            <Book.Side>
              <article className='page' >
                <p className='text-box'>
                  I wonder how I can help her feel more comfortable?'
                  Little Billy was a very considerate Little Billy. 
                  He thought long and hard, and finally remembered a talk he had with Daddy.
                </p>
              </article>
            </Book.Side>
          </Book.Page>
      
          <Book.Page>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy remembered watching televison with Daddy before he went out for Milk and Cigarettes. 
                    Daddy poured some of Mommy's special juice into
                    a very big cup, then sat down to watch a program called 'The News'.
                </p>
            </article>
          </Book.Side>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Little Billy thought The News was very boring. YAWN! There were no cartoons! 
                    Daddy said, There's a damn cartoon character on here everyday, and he's the boss of the whole country!' 
                    This made Daddy laugh until he violently coughed.
                </p>
            </article>
          </Book.Side>
          </Book.Page>

          <Book.Page> 
          <Book.Side>
            <article className='page' onClick={() => this.showCategorySelector('HELPFUL', "FEMINISM")}>
                 <p className='text-box'> 
                    Little Billy did not understand, and walked away. Daddy yelled 
                    something about 'Virtue Signaling' at The News. Little Billy asked
                    Mommy what that was. Mommy looked embarrassed about Daddy.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                <p className='text-box'>
                    She said, 'Oh, nothing, Pumpkin, it's just when a little boy 
                    does something really nice for a little girl, because he really means it.' 
                    Little Billy liked that, so he decided he would do Virtue Signaling for Becky now.
                </p>
            </article>
          </Book.Side>
        </Book.Page>

        <Book.Page>
            <Book.Side>
              <article className='page'>
                <p className='text-box'>
                  Billy thought, 'I can run faster than her, but I will race her and let her win. 
                  Everyone will like her and she will feel better about being the new kid in town!'
                  Little Billy smiled really big and whispered:
                </p>
              </article>
            </Book.Side>
            <Book.Side>
              <article className='page' >
                <p className='quote-text-box'>
                "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                {this.state.selectedCategory === 'helpful' ?
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif' alt='help'></img>
                :
                <img className="animated-gif-quote-photo" src='https://thumbs.gfycat.com/LastNewBlackmamba-size_restricted.gif' alt='high five'></img>
                }
              </article>
            </Book.Side>
          </Book.Page>
        
          <Book.Page>
            <Book.Side>
              <article className='page'>
                <p className='text-box'> 
                   To Becky he said, 'Hey, you look really fast! I bet you can beat me in a race! Becky looked at the other children.
                   They smiled and nodded, so she decided to try. 'O.K. But we can't put money on it, that's why
                   I got kicked out of my last school.'
                </p>
              </article>
            </Book.Side>
            <Book.Side>
              <article className='page'>
                <p className='text-box'>
                  Little Billy was confused, but he chose to ignore what she said because he did not have any money. 'GREAT!' Little Billy said, 'let's do it!'
                </p>
                <img className="animated-gif-bottom-left" src='https://media.giphy.com/media/wOXQvz3FwajVm/giphy.gif' alt='awkward'></img>
              </article>
            </Book.Side>
          </Book.Page>

        <Book.Page>  
          <Book.Side>
            <article className='page' onClick={() => this.showCategorySelector('KANYE', "COMMUNISM")}>
                 <p className='text-box'> 
                    The other children gathered around. His friend Carlos was the judge. He said, 'Okay, I want a 
                    good clean race! First person to the big tree on the other side of the park wins. 
                    Ready, set, GO!' Little Billy started running. 
                </p>
            </article>
          </Book.Side>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He ran slower than he had ever run in his life, smiling smugly to himself. 
                    Both he and Becky were going to feel really good after this.
                    When he was halfway to the tree, he looked back and saw that Becky was still by the slide.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>  
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    She had barely moved! She was walking, not even running! He stopped and pretended to be tired. 
                    It was going to be hard for him to lose. He saw his friend Juan-Pablo smoking a candy cigarette 
                    by the monkey bars.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
          <article className='page'>
                <p className='text-box'>
                    Little Billy thought, 'I'll pretend like I need a break!' He walked over and started talking to Juan-Pablo. 
                    'Hey, Little Billy,' Juan-Pablo said. He pulled a candy cigarette out of his pack and tossed it to Little Billy.
                    He said, 'Today I read something neat:'  
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side>
            <article className='page' onClick={() => this.showCategorySelector('TRUMP', "ABSURD")}>
                 <p className='quote-text-box'> 
                  "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                {this.state.selectedCategory === 'kanye' ?
                <img className="animated-gif-quote-photo" src='https://media2.giphy.com/media/LKqDgLlK6SuIM/giphy.gif' alt='kanye'></img>
                :
                <img className="animated-gif-quote-photo" src='https://media3.giphy.com/media/inctcuuIJ9PvG/source.gif' alt='kim'></img>
                }
            </article>
          </Book.Side>
          <Book.Side>
          <article className='page'>
                <p className='text-box'>
                    Little Billy agreed with Juan-Pablo, but only 
                    had enough time to hit him with a 'HELL YEAH, BROTHER!' 
                </p>
                <img className='animated-gif-bottom-left' src='https://media.giphy.com/media/xT0xesSUmO2rhBjP7G/giphy.gif' alt='hogan'></img>
                <p className='post-tag-line-text-box'>Becky was ahead.</p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side>
            <article className='page' >
                 <p className='text-box'> 
                    Becky was still walking, lifting her little leg and sort of dragging the littler one along.  
                    He ran up behind her. Becky crossed the finish line just before he did. 
                    She had won the race. Alive, she shouted:
                </p>
            </article>
          </Book.Side>
            <Book.Side><article className='page'>
                <p className='quote-text-box'>
                     "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                {this.state.selectedCategory === 'trump' ?
                <img className="animated-gif-quote-photo" src='https://media2.giphy.com/media/9jEaPxN9eZWmI/source.gif' alt='trump'></img>
                :
                <img className="animated-gif-quote-photo" src='https://gifimage.net/wp-content/uploads/2018/06/terry-crews-dancing-gif-7.gif' alt='absurd'></img>
                }
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    The kids crowded around, saying how great Becky was. It really helped her self esteem a lot. 
                    She became really popular at school, but the other kids started being mean to Billy because he had lost the race and his dad.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Billy didn't get it. He just wanted to be nice! The other kids saw his action as weakness. Becky was Billy's 
                    only friend in elementary and middle school. He fell in love with her, but didn't tell her until the 8th grade dance.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                      She said she loved him too, but only as a friend. Little Billy was sad and angry. He went down a bad path. He got into
                </p>
                <img className="animated-gif-bottom-right" src='https://media.giphy.com/media/Afo5pALRKdWDe/giphy.gif' alt='cyber'></img>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Men's Rights. Luckily in high school he became a cool art kid,
                    and dropped the Red Pill stuff. Good call, Little Billy!
                </p>
                <img className='animated-gif-bottom-left' src='https://media1.giphy.com/media/3o7a8gqflzWQgXQxe8/giphy.gif' alt='men'></img>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    One night senior year, Becky got dumped by her jerk boyfriend who liked football and Toxic Masculinity. She called Billy, 
                    who wasn't so Little anymore. They met up and talked, and made out for a little bit. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    They dated, then got married too young. Little Billy thought about that fateful day he threw the race against Becky. 
                    Even though it made his life suck for years, it had paid off in the end because:
                </p>
                <p className='race-tag-line-park-evil'> SLOW AND STEADY WINS THE RACE.</p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.engageTheEnd()}>
                <p className='text-box'>
                    It was cool for awhile, but monogamy is an artificial constraint imposed upon the masses by religious zealots. They divorced 
                    in college. They were mature about it, and still hook up sometimes when they are drunk.
                </p>
                <p className='race-end-tag-line'>THE END</p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                <img src={require('../images/back_cover.png')} alt='park'/>
            </article>
          </Book.Side>
        </Book.Page> 

        </Book>
        {this.returnToChoose()}
          </div> 
          :
          null 
    }

    {/* TRAILER STORY BEGINS HERE */}

    {this.state.goToTrailer ?
           <div className="park-story-book-glutton-end">
    
           <Book width='880px' height='523px'> 

           <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showCategorySelector('LIES', "REBELLION")}>
                <p className='text-box'>
                    <p className='ch-2-header'>Part II</p>  
                    <p className='ch-2-title'>Little Billy's Trailer Park Adventure</p>
                </p>
                <img className="animated-gif-park" src='https://thumbs.gfycat.com/PlumpSlipperyKitty-size_restricted.gif' alt='park'></img>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                   Little Billy was being naughty. Mommy was crying, laughing, and dancing alone, 
                    so he tip-toed out of the kitchen. He grabbed his boots, and laced them up. 
                    He put on his coat, a scarf, some warm gloves,
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

            <Book.Page>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    and opened the door out into the snow. A strange gleam appeared in his eye.
                    'Here I come, Abandoned Trailer Park down by the railroad tracks,' he said, 
                    'soon your secrets will be mine!'
                </p>
            </article>
          </Book.Side>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He would be punished if Mommy found out, so he snuck down an alley and headed to the
                    'bad neighborhood.' "What Mommy doesn't know won't hurt her," he thought, and with a flutter in his tummy he yelled:
                </p>
            </article>
          </Book.Side>
          </Book.Page>

          <Book.Page>
          <Book.Side><article className='page'>
                <p className='quote-text-box'>
                  "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                {this.state.selectedCategory === 'lies' ?
                <img className="animated-gif-quote-photo" src='https://media0.giphy.com/media/NdKVEei95yvIY/giphy.gif' alt='lies'></img>
                :
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif' alt='rebel'></img>
                }
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Through the snow, over broken glass and trash, across the railroad tracks, he saw the 
                    Abandoned Trailer Park. Two strangers were walking in front of him. 
                    One of them had very nice hair, and a very clean suit. His shoes and tie were in perfect order.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    The other man was very skinny and old. His hair was falling out
                    and his shirt was very dirty. Billy
                    was a very good reader and he sounded out he words on the man's shirt.
                    'VI. ET. NAM. VET. ER. AN.'
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    This man did not have a tie, or a suit, or shoes. 
                    He was shivering a lot, and kept yelling things at a telephone pole.
                </p>
                <img className='animated-gif-bottom-left' src='https://media.giphy.com/media/Psrpn0e5P4k36/giphy.gif' alt='dentures fire'></img>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showCategorySelector('EVIL', "BRAVERY")}>
                <p className='text-box'>
                    Little Billy heard the man wearing shoes say 'Nothing but Crackheads up here, I ain't investing a dime!' 
                    The 'VIETNAM VETERAN' went into the Abandoned Trailer Park.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy was suddenly afraid. He did not know what a 'Crackhead' was, 
                    but he guessed the man who went into the Abandoned Trailer Park might be one.  
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He knew he had to stick to the plan. He decided to go ask the man wearing the 'VIETNAM VETERAN' shirt what a 'Crackhead' was.
                    Sounding more brave than he really felt, Little Billy said:
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='quote-text-box'> 
                  "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                {this.state.selectedCategory === 'evil' ?
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/9ySjuLTJEpPAA/giphy.gif' alt='evil'></img>
                :
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/3o6wrcXqqHCN31ynUQ/giphy.gif' alt='bravery'></img>
                }
            </article>
          </Book.Side>
        </Book.Page> 
                          
        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He climbed on an old milk crate and looked in a broken window. He saw
                    the decayed remains of someone's forclosed home. He picked up a glass bottle and
                    smashed it on the concrete.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                     It felt good, so he picked up another and threw it through a window, 
                     which broke into a thousand shards. That scared and excited Little Billy. 
                     He picked up a third bottle. This one still had liquid in it. He smelled it. 'EWWWW',
                    he said.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showCategorySelector('KANYE', "TRUMP")}>
                <p className='text-box'>
                  'It smells like sour bread!' He took a sip and spit it out. 'YUCKY!' Years later, Little Billy would try the sour bread drink again.
                  When he did, he realized that he really, REALLY liked it after all. In fact, he liked it so much that
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                   he drank it everyday and became
                  an A.L.C.O.H.O.L.I.C. Do you know what that spells? Hint: Little Billy's parents were this too!  
                </p>
                <img className='animated-gif-bottom-left' src='https://media.giphy.com/media/YrkD2MwU8J382Krrxt/giphy.gif' alt='drunk'></img>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                  'I feel gross!' Little Billy said, spitting again. From the shadows, he heard a scary, 
                    dark laugh. It was the man who didn't have shoes! Scared, Little Billy threw the bottle
                    and screamed.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    The chaos he had caused with the bottles made
                    Little Billy feel very brave. He asked the man, 'Do you have a crack on 
                    your head? What's a Vietnam?' The crackhead said:    
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showDirectionSelector('FAST', "SLOW")}>
                <p className='quote-text-box'>
                "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                {this.state.selectedCategory === 'kanye' ?
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/YfoU1mNbjZ0k0/giphy.gif' alt='kanye'></img>
                :
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/psnG8iKvm5lo4/giphy.gif' alt='trump'></img>
                }
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Then he looked at Billy and went 'BARK BARK' like a dog. 
                    He dropped down on all fours and started chasing Little Billy. He had not had any crack all day 
                    and was suffering from 'Cocaine Psychosis.' 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.engageFastOrSlow()}>
                <p className='text-box'>
                  Little Billy was excited. He thought the crackhead wanted to play! He said, 'Are you a little puppy?' He was sorely mistaken.
                  The crackhead was not a little puppy. He was the product of a failed system that sold lies and didn't take care of its own. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Launching himself forward, he snarled and spat foam. He was ready to do terrible things to get some of those Peruvian biscuits.
                </p>
                <img className='animated-gif-bottom-left' src='https://media.tenor.com/images/32015b35212a801756f781d011a2c815/tenor.gif' alt='run away'></img>
            </article>
          </Book.Side>
        </Book.Page> 
        </Book>
        </div> :
        null 
    }

        {/* TRAILER && FAST */}

    {this.state.goToFastPath ? 
     <div className="park-story-book-glutton-end">
    
     <Book width='880px' height='523px'> 

        <Book.Page>
          <Book.Side>
            <article className='page' onClick={() => this.showCategorySelector('VICTORY', "SADNESS")}>
                 <p className='text-box'> 
                    Little Billy was very, very scared. He was so scared that he peed in his 
                    own jeans, which is not a big deal and happens to the best of us. 
                    He took off running. The crackhead was very fast.  
                </p>
            </article>
          </Book.Side>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He was extremely motivated, both by his addiction, and the hard knowledge that a government he had bled for overseas
                    failed him in his hour of darkest need.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He caught Little Billy in ONE TWO THREE FOUR FIVE seconds. Billy's face hit the ground. 
                    The crackhead rifled through Little Billy's pockets and found five dollars that Little Billy 
                    stole from his Mommy's purse that morning. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                     Little Billy was crying, 'BOO HOO HOO!' The Crackhead was laughing 'HA HA HA'. 
                     The Crackhead had been waiting all day as patiently as his addled body could, 
                     and he finally had enough money to get his fix! Excited, he said:
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='quote-text-box'>
                  "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/q5Kz6XldJhPIA/giphy.gif' alt='tyrone'></img>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He headed back to the crack house. Little Billy cried on the ground with a bloody nose. 
                    He decided that he would always listen to his
                    Mommy when she told him things, because she probably just wanted to keep him safe.  
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    The Crackhead learned two lessons: children make easy targets, and:
                    </p>
                    <p className='race-tag-line-park-evil'> SLOW AND STEADY WINS THE CRACK.</p>
                    <p className='post-tag-line-text-box'>
                    Daddy never came back from getting 
                    Milk and Cigarettes. Mommy and Billy moved to the bad neighborhood   
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    by the railroad tracks, where most people discovered how horrible fentanyl is. 
                    Little Billy remembered the crackhead and stayed far away from drugs. He got 
                    out of the bad neighborhood, and worked for a logging conglomerate.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.engageTheEnd()}>
                <p className='text-box'>
                    He got filthy rich destroying the Amazon Rainforest. Now he's an advisor to the President.
                </p>
                <img className="animated-gif-bottom-right" src='https://media.giphy.com/media/FiA4QnY4UH8nC/giphy.gif' alt='rich-guy'></img>
                <p className='race-end-tag-line'>THE END</p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                    <img src={require('../images/back_cover.png')} alt='park'/>
            </article>
          </Book.Side>
        </Book.Page> 
        </Book>
        {this.returnToChoose()}
        </div> 
        :
        null
        }

  {/* TRAILER && SLOW */}

  {this.state.goToSlowPath ? 
  <div className="park-story-book-glutton-end">
    
  <Book width='880px' height='523px'> 

  <Book.Page>
          <Book.Side>
            <article className='page' >
                 <p className='text-box'> 
                    Little Billy was very, very scared. He was so scared that he peed in his 
                    own pants, which happens to the best of us. 
                    He took off running. The crackhead was not very fast.  
                </p>
            </article>
          </Book.Side>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    After all, he was very old and coming down from his high very quickly. Little Billy, on the other hand, was the fastest boy in his class. 
                    Feeling suddenly calm and focused, he put on a burst of speed and screamed: 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

         <Book.Page>
          <Book.Side>
            <article className='page' onClick={() => this.showCategorySelector('VICTORY', "SADNESS")}>
                 <p className='text-box'> 
                 "{this.getRandomQuote(this.props.quotes.filter(quote => quote.category === 'battle'))}"
                </p>
                <img className="animated-gif-quote-photo" src='https://media1.giphy.com/media/hbcorXlnIJySI/giphy.gif' alt='battle-kid'></img>
            </article>
          </Book.Side>
          <Book.Side><article className='page'>
                <p className='text-box'>
                  He was trying to reach the entrance so he could escape, but the Crackhead was boxing him in. Little Billy knew that
                  his only chance of escape was a slow, long campaign. He had much higher stamina than the mean, old veteran.    
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He repeatedly juked the crackhead, always moving. Soon the crackhead got very, very tired. 
                    'YAWN', he said,
                    and fell to the ground in a dead faint. Billy towered over him, saying:  
                </p>
            </article>
          </Book.Side>
         <Book.Side>
            <article className='page'>
                 <p className='quote-text-box'> 
                  "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
                {this.state.selectedCategory === 'victory' ?
                <img className="animated-gif-quote-photo" src='https://media3.giphy.com/media/koPSBhdvbCD4c/giphy.gif' alt='rocky'></img>
                :
                <img className="animated-gif-quote-photo" src='https://media.giphy.com/media/ABwu13jkMNBG8/giphy.gif' alt='always sunny crack'></img>
                }
            </article>
          </Book.Side>
          </Book.Page>

        <Book.Page>
          <Book.Side>
          <article className='page'>
                <p className='text-box'>
                    He left the trailer park with a valuable life lesson:  
                </p>
                <p className='race-tag-line-park-evil'> SLOW AND STEADY WINS THE RACE.</p>
                <p className='post-tag-line-text-box'>That lesson stayed with him over the years. After a trip to Moscow in college,</p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    he started a
                    decades long disinformation campaign, 
                    all to help destabilize Western Democracy on the orders of Vladimir Putin. 
                </p>
                <img className='animated-gif-bottom-left' src='https://media.giphy.com/media/isP4TLqhjm3zq/giphy.gif' alt='putin'></img>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side>
            <article className='page' onClick={() => this.engageTheEnd()}>
                 <p className='text-box'> 
                  Boy did it work! He was eventually compromised and disposed of by his own handlers, sadly only days before the glorious 
                  reunification of the Soviet Empire.
                </p>
                <p className='race-end-tag-line'>THE END</p>
            </article>
          </Book.Side>
          <Book.Side>
              <article className='page'>
                <img src={require('../images/back_cover.png')} alt='park'/>
            </article>
             </Book.Side>
        </Book.Page>  
   </Book> 
   {this.returnToChoose()}
          </div>
          :
          null
          }
  </div>
  </div>
              
        )
    }
}