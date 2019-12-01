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
            current_quote: null,
            prepGluttonEnding: false,
            engageGluttonEnding: false,
            choice1: null,
            choice2: null,
            theEnd: false,
            goToPark: false,
            goToTrailer: false,


            chapter2Setup: false,
            chapter2: false,
            villian_quotes: this.props.quotes.filter(quote => quote.category === 'villian'), 
            diet_quotes: this.props.quotes.filter(quote => quote.category === 'diet'), 
            help_quotes: this.props.quotes.filter(quote => quote.category === 'help'), 
            sadness_quotes: this.props.quotes.filter(quote => quote.category === 'sadness'), 
            gluttony_quotes: this.props.quotes.filter(quote => quote.category === 'gluttony'), 
            rebellion_quotes: this.props.quotes.filter(quote => quote.category === 'rebellion'), 
            death_quotes: this.props.quotes.filter(quote => quote.category === 'death'), 
            suffering_quotes: this.props.quotes.filter(quote => quote.category === 'suffering'), 
            depression_quotes: this.props.quotes.filter(quote => quote.category === 'depression'), 
            evil_quotes: this.props.quotes.filter(quote => quote.category === 'evil'), 
            trump_quotes: this.props.quotes.filter(quote => quote.category === 'trump'), 
            fear_quotes: this.props.quotes.filter(quote => quote.category === 'fear'), 
            feminism_quotes: this.props.quotes.filter(quote => quote.category === 'feminism'), 
            lies_quotes: this.props.quotes.filter(quote => quote.category === 'lies'), 
            christian_quotes: this.props.quotes.filter(quote => quote.category === 'christian'), 
            absurd_quotes: this.props.quotes.filter(quote => quote.category === 'absurd'), 
            philosophy_quotes: this.props.quotes.filter(quote => quote.category === 'philosophy'), 
            kanye_quotes: this.props.quotes.filter(quote => quote.category === 'kanye'), 
            bravery_quotes: this.props.quotes.filter(quote => quote.category === 'bravery'), 
            super_hero_quotes: this.props.quotes.filter(quote => quote.category === 'super_hero'), 
            victory_quotes: this.props.quotes.filter(quote => quote.category === 'victory'), 
            battle_quotes: this.props.quotes.filter(quote => quote.category === 'battle'), 
            communism_quotes: this.props.quotes.filter(quote => quote.category === 'communism'), 
            humility_quotes: this.props.quotes.filter(quote => quote.category === 'humility'), 
            capitalism_quotes: this.props.quotes.filter(quote => quote.category === 'capitalism')
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
          <div id='category-picker'>
            <p className='chalkboard-text-header'>Choose A Category<br></br></p>
            <p id='underline'>________</p>
            <br></br>
            <p className='chalkboard-text-choice-1' onClick={() => this.makeChoice(this.props.quotes.filter(quote => quote.category === first.toLowerCase() ))}>{first}</p>
            <br></br>
            <p id='or'>OR</p>
            <br></br>
            <p className='chalkboard-text-choice-2' onClick={() => this.makeChoice(this.props.quotes.filter(quote => quote.category === second.toLowerCase() ))}>{second}</p>
          </div>
          )
        }
    }

    displayStoryChoices = (first, second) => {
      if (this.state.showDirection) { 
        return(
        <div id='category-picker'>
          <p className='chalkboard-text-header'>Choose A Category<br></br></p>
          <p id='underline'>________</p>
          <br></br>
          <p className='chalkboard-text-choice-1' onClick={() => this.pickPath(first)}>{first}</p>
          <br></br>
          <p id='or'>OR</p>
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
  }

    getRandomQuote = (category) => {
      let selectedQuote = category[Math.floor(Math.random() * category.length)]
      return selectedQuote.content
  }

    makeChoice = (category) => {
        this.setState({
            current_quote: this.getRandomQuote(category),
            showCategories: false,
        })
        if (category[0].category === 'gluttony'){
          this.setState({
            prepGluttonEnding: true
          })
        }
    }

   engagePartTwo = () => {
     if (this.state.prepGluttonEnding) {
       this.setState({
         engageGluttonEnding: true,
         engageDiet: false
       })
     } 
     else {
       this.setState({
         engageDiet: true,
         engageGluttonEnding: false
       })
     }
   }


   engageTheEnd = () => {
     this.setState({
       theEnd: true
     })
   }

   returnToChoose = () => {
     if (this.state.theEnd) {
       return(
         <div className='back-to-choose'>
             <p className='chalkboard-text-header'>Where To Now?<br></br></p>
            <p id='underline'>________</p>
            <br></br>
            <p className='end-chalkboard-text-choice-1'><NavLink to='/new'>START FRESH</NavLink></p>
            <br></br>
            <p id='end-or'>OR</p>
            <br></br>
            <p className='end-chalkboard-text-choice-2'><NavLink to='/library'>SEE LIBRARY</NavLink></p>
        </div>
       )
     }
   }
 

    render(){
        return (
    <div className='shelf-bg'>

               {this.displayQuoteChoices(this.state.choice1, this.state.choice2)}
               {this.displayStoryChoices(this.state.choice1, this.state.choice2)}


        <div className="park-story-book">
    
     <Book width='880px' height='523px'>     

        <Book.Page> 
          <Book.Side>
            <article className='page'>
              <img src={require('../images/ParkCoverLg.png')} alt='park' onClick={() => this.showCategorySelector('DESPAIR', "CHRISTIAN")}/>
            </article>
          </Book.Side>

          <Book.Side>
            <article className='page'>
                <p className='text-box'>
                    The clock on Little Billy's bedside table went 'BUZZZ! BUZZZ!' He sat up, still feeling a little bit sleepy. 
                     He walked to his window and looked out. There was snow everywhere! He thought to himself: 
                </p>
            </article>
          </Book.Side>
        </Book.Page>

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    {this.state.current_quote ? this.state.current_quote : null}
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy shook his little head. "I don't know why I said that, I must be having a senior moment!" He looked at the calendar 
                    Mommy made him and saw that it was Saturday. 'Hey! It's Saturday! That means no school today! 
                </p>
            </article>
          </Book.Side>
        </Book.Page>

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showCategorySelector("DEATH", "FEMINISM")}>
                <p className='text-box'>
                    Feeling very, very excited now, and not even a 
                    little bit sleepy, he ran downstairs.
                    Mommy was in the kitchen, busy as a bee making breakfast. Pancakes! Pancakes were Little Billy's favorite! 
                    It smelled very yummy.
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
                    'That's nice, dear', Mommy said. But, as adults usually do when children are yapping on and on, 
                    she wasn't really listening. She was lost in thought, thinking about: 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    {this.state.current_quote ? this.state.current_quote : null}
                </p>
            </article>
          </Book.Side>
        </Book.Page>     

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showCategorySelector("GLUTTONY", "DIET")}>
                <p className='text-box'>
                    Billy stopped eating and looked at her. He did not know what she was talking about. She did not seem to notice that Little Billy
                    was there. He decided it was better not to ask questions,
                    because sometimes questions made Mommy very mad. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Mommy went and poured some special Mommy juice into her cup of coffee. Little Billy thought
                    coffee smelled very good when it was being made, but after Mommy put her special juice into it, 
                    he thought it smelled very yucky.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.engagePartTwo()}>
                <p className='text-box'>
                    It also made Mommy act very funny, and Little Billy did not like that.
                    Little Billy decided to eat his food as quickly as possible. 
                    Before Daddy had gone out for Milk and Cigarettes last week, he always used to say: 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
            </article>
          </Book.Side>
        </Book.Page> 
        </Book>
            { (this.state.engageGluttonEnding) ? (
              <div className="park-story-book-glutton-end">
              <Book width='880px' height='523px'>
        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showCategorySelector("ABSURD", "SUFFERING")}>
                <p className='text-box'>
                    Little Billy was cramming pancakes into his chubby little cheeks as fast as he could. He was so excited. 
                    Pancakes, Snow, Saturday...it was just too perfect! He was so full of happy thoughts 
                    that he didn't notice that he could not breathe.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                 There were sweet syrupy pancakes clogging up his pipes! He was choking to death! If he had a mirror, he would see 
                 that he was turning P. U. R. P. L. E. - purple! He tried to call out to Mommy, but the pancakes were stuck in his 
                 throat and he could not talk!
                </p>
            </article>
          </Book.Side>
        </Book.Page> 
        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Mommy did not see Billy either. She was staring out the window with that
                    far away look in her eyes that grownups almost always have. She finally turned around when she heard 
                    Little Billy's body crash to the floor!
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    'Little Billy,' she shouted! She rolled him over onto his Little big belly. She pounded on it and
                    pounded on it, not knowing what to do. Sadly, it was just too late. The pancakes had gotten the best of Little Billy.
                    
                </p>
            </article>
          </Book.Side>
        </Book.Page> 
        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                Mother cried  out, "{this.state.current_quote ? this.state.current_quote : null}"
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    She held the pitiful, lifeless carcass of her first born son, Little Billy. She
                    wished only that she had taught her son not to eat so fast, because:
                </p>
                <p className='race-tag-line'> SLOW AND STEADY WINS THE RACE.</p>
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
            {this.state.engageDiet ? 
            <div className="park-story-book-glutton-end">
              <Book width='880px' height='523px'>
        <Book.Page>
          <Book.Side><article className='page' onClick={() => this.showDirectionSelector('PARK', "TRAILER PARK")}>
                <p className='text-box'>
                    Little Billy took his time eating, which was a very wise thing for a small boy to do. 
                    Mommy didn't talk very much, so Billy sat quietly and tried to decide what he
                    wanted to do first. He finally came up with two very clever ideas.    
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He could go and find his friends, who were probably all playing in the park, OR, 
                    he could go to the place that Mommy always said he was not supposed to go:
                    The abandoned Trailer Park down by the railroad tracks.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 
        <Book.Page>
          <Book.Side>

          </Book.Side>
        </Book.Page>
        </Book>
        </div>
        :
        null
    }

    {this.state.goToPark ? 
       <div className="park-story-book">
    
     <Book width='880px' height='523px'>  
        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Chapter 2: Little Billy's Big Park Adventure
                </p>
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
                    He yelled, 'I'm going to the park! HOORAY!'",
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy was feeling very naughty. Mommy was crying and laughing while dancing all alone in the kitchen, 
                    so without saying a word, he tip-toed out of the kitchen. He grabbed his boots, and laced them up. 
                    He put on his coat, a scarf, some nice warm gloves,
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    and opened the front door out into the wide world. A strange gleam appeared in his eye.
                    'Here I come, abandoned Trailer Park down by the railroad tracks,' he said quietly to himself, 
                    'soon your secrets will be mine!'
        
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    It was very cold. 'BRRRR', said Little Billy. He felt like it was taking forever to get to the park. He thought about how there would probably be a
                    snowball fight. He could make a Snowman. He could lay down in the snow and make Snow Angels.
      
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    There were so many options for having fun! Little Billy finally saw the playground up ahead and knew he was close.
                    He could see lots of other children already playing. He started to run, not wanting to miss out on any more activities. 
          
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                 Little Billy was fast, the fastest person in his class. He saw some of his friends having a footrace by the slide. 
                 He said 'Hello, everyone!' as they ran across the finish line. There was a new girl that Billy had never seen before standing nearby. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 
  
        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    'Who are you?,' he asked. 'I'm Becky. I'm the new kid in town,' she said. Little Billy looked her up and down. She was not as tall as Billy, and he saw that one of her little legs was shorter than
                    the other one.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Just then, a very, very '_________' idea came to Little Billy's mind.
                    Billy thought, 'I just know I can run faster than her! I will challenge her to a race, because it will be an easy win.' Little Billy didn't even stop to consider how it would make Becky feel.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                 '_________',  he said aloud.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    His friend Carlos, who was standing beside Little Billy, opened his eyes wide and backed up a couple steps. This was a
                    side of Little Billy he had never seen, and it was very, very scary. To Becky he said, 'I bet I'm twice as fast as you, slow-poke! 
           
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Are you too chicken to race me?' She scrunched up her face like she might cry. 'Don't call me names! Even if you are
                    faster than me, I bet I can beat you in a race anyway.' 'NO WAY,'' Little Billy said, 'let's do it!'
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He smiled a very big smile and looked at Carlos. Years later, Carlos would remember that moment and think to himself how Little Billy's smile did not quite reach his eyes.
                    He told his therapist all about it.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    The other children gathered around. Carlos said, 'Okay, I want a good clean race! 
                    First person to the big tree on the other side of the park wins. Ready, set, GO!' 
                    Little Billy took off running. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                 He ran faster than he had ever run in his life, all the while cackling maniacally 
                 to himself just like Mommy had laughed back in the kitchen over breakfast. 
                 When he was almost at the big, old tree, he looked back and saw that Becky was still by the slide. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                     Why, she had barely moved! She was walking, not even running! He jumped up and down, knowing 
                     that it was impossible for him to lose. He saw his friend Juan-Pablo smoking a candy cigarette by the monkey bars.
           
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy thought, 'I have plenty of time. I'll take a break, and I will
                    still win this race!' He walked over and started talking to Juan-Pablo. 'Hey, 
                    Little Billy,' Juan-Pablo said. 'Care for a candy cigarette?
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Little Billy accepted and started puffing away. 'Today I read something neat', Juan-Pablo said. '_________'. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                     Little Billy '_________'. I think '_________', he said to Juan Pablo.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    They kept talking back and forth. It was a fantastic argument on the topic, 
                    and both interlocutors had well researched opinions on the matter, given that 
                    they were only 9 and three-quarters
           years old.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                     It went on for so long, in fact, that Little Billy didn't notice Becky walk slowly past 
                     them. When the other children let out a cheer, Little Billy looked up, horrified. He dropped 
                     his candy cigarette, mashed it in the dirt with his foot, and took off running. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    She was still walking, lifting her little leg high and sort of dragging the littler one behind her. 
                    Little Billy might still be able to beat her! He pushed himself harder than he ever had, harder than he 
                    thought a little boy like him could even push. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He was gaining on her, and gaining. He was the eensiest-weensiest bit too late. 
                    Becky crossed the finish line just before he did. She had won the race. With a new 
                    found sense of strength she did not know she possessed, Becky said, '_________'
                </p>
            </article>
          </Book.Side>
        </Book.Page> 
        </Book>
        :
        null
    }

        {/* <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Billy was '_________'. He shouted back, '_________'.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    All of the strength Becky thought she had left her at once. She started crying as Billy finished his rant and charged at her. 
                    She started to really run this time, crying big crocodile tears. Luckily, her Mommy has just been coming to get her. 
              
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    She ran up just in time to stop Little Billy from doing a very mean thing. Becky's mommy 
                    dragged Little Billy by the ear back to his own house. She told his mommy exactly what had happened. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Little Billy was put into time out for the rest
                    of the weekend and had to stay in his room. He learned several valuable lessons that day, 
                    namely: 
                    <br></br> 
                    SLOW AND STEADY WINS THE RACE.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    While this applied to the actual race he had lost in the park, he also sat scheming about how he 
                    would SLOWLY AND STEADILY WIN THE RACE of plotting his revenge against Becky. 
                    He made several very, very not nice drawings
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    of what he planned to do. Luckily Mommy found them, and took him to see a counselor.
                    Little Billy really benefited from those sessions and became a very sweet little boy.
                    THE END
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                <img src={require('../images/back_cover.png')} alt='park'/>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Becky smiled brightly at Little Billy. It seemed like they had both learned something about themselves. 
                    When they grew up, they got married. Becky was the first female President, and Little Billy became a professional 
                    runner in the Olympics.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                     He took home the gold in four separate games. It was all thanks to the 
                     valuable lesson: SLOW AND STEADY WINS THE RACE. Sadly, Little Billy was later 
                     indicted on several counts of doping charges, and stripped of his medals.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Becky was booted out of office after it came to light that she was
                    receiving kickbacks from the oil industry and was actively preventing 
                    the green energy revolution, while simultaneously opening up channels for 
                    the Russians to interfere in domestic politics. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    They both got too greedy in their lustful search for power. If only they'd remembered 
                    that fateful lesson from earlier: SLOW AND STEADY WINS THE RACE.
                    THE END 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <img src={require('../images/back_cover.png')} alt='park'/>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy remembered watching televison with Daddy long ago before he went out for Milk and Cigarettes. 
                    Daddy had poured some of Mommy's special juice into
                    a very, very big cup, then sat down to watch a program called 'The News'.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Little Billy thought it was a very boring show. There were no cartoons! 
                    Daddy said there WAS a cartoon character in The News all the time, and that 
                    the cartoon character was the boss of the whole country!
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy did not understand, and walked away. Daddy yelled 
                    something about 'Virtue Signaling' at The News. Little Billy asked
                     Mommy what that was. Mommy looked embarrassed about Daddy.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    She said, 'Oh, nothing, Pumpkin, it's just when, like, a little boy 
                    does something really nice for a little girl, because he really means it.' 
                    Little Billy liked that, so he decided he would do Virtue Signaling for Becky now.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    The other children gathered around. Carlos said, 'Okay, I want a 
                    good clean race! First person to the big tree on the other side of the park wins. 
                    Ready, set, GO!' Little Billy started running. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He ran slower than he had ever run in his life, all the while smiling to himself. 
                    Both he and Becky were going to feel really good after this.
                    When he was halfway to the tree, he looked back and saw that Becky was still by the slide.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    She had barely moved! She was walking, not even running! He stopped and pretended to be tired. 
                    It was going to be hard for him to lose. He saw his friend Juan-Pablo smoking a candy cigarette 
                    by the monkey bars.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Little Billy thought, 'I'll pretend like I need a break!' He walked over and started talking to Juan-Pablo. 
                    'Hey, Little Billy,' Juan-Pablo said. 'Today I read something neat.' '_________'
                   
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Little Billy agreed with Juan-Pablo, but didn't
                    have enough time to engage in the finer points of the topic. Becky was ahead of him now.
                    She was still walking, lifting her little leg high and sort of dragging the littler one behind her inch by inch. 
                    
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy thought he should put on a good show. He started running again at a slow pace. 
                    He was gaining on her, and gaining.  He timed it just right. Becky crossed the finish line just before he did. 
                    She had won the race. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    With a new found sense of strength she did not know she possessed, Becky said, '_________'.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    The kids crowded around, saying how great Becky was. It really helped her self esteem a lot. 
                    She became really popular at school, but the other kids started being mean to Billy because he had lost the race.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Billy didn't understand. He just wanted to be nice, but the other children saw his action as weakness
                    and pounced. Becky was Little Billy's only friend all through middle school and high school. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He fell in love with her, but didn't tell her until it was time for the 8th grade dance. She said she loved him too, but only as a friend. That made Billy very sad,
                    and also very angry.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He hated women after that. He got really into Men's Rights. Luckily in high school he started hanging out with weird art and theatre kids,
                    and he got over the Red Pill stuff because it's a really bad, flawed ideology.
                </p>
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
                    Even though it made his life suck for a bit, it had paid off in the end because: SLOW AND STEADY WINS THE RACE.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    It was cool for awhile, but monogamy is an artificial constraint imposed upon the masses by religious zealots. They divorced 
                    in college. They were mature about it, and are still friends who hook up when they are drunk and lonely.
                    THE END
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                <img src={require('../images/back_cover.png')} alt='park'/>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Knowing that he would be punished if Mommy found out, he snuck down an alleyway and headed uptown 
                    to the 'bad neighborhood.' 'What Mommy doesn't know won't hurt her,' Little Billy said, with a flutter in his tummy. '_________'.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    As he tip-toed over the broken glass and trash, across the railroad tracks, he saw the 
                    Abandoned Trailer Park up ahead. Two strangers were walking in different directions in front of him. 
                    One of them had very nice hair, and a very clean suit.
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    His shoes and tie were in perfect order. He had a briefcase. The other man was very skinny. 
                    His hair was falling out. He was very old, and his shirt was very dirty. Billy
                    was a very good reader, and sounded out the words on the shirt.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    'VI. ET. NAM. VET. ER. AN.' This man did not have a tie, or a briefcase, or shoes. 
                    He was shivering a lot, and kept yelling things that Little Billy could not understand.
                    As the two men passed each other, 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Little Billy heard the one wearing shoes say 'Nothing but Crackheads up here, I ain't investing a dime!' 
                    The man who was wearing the 'VIETNAM VETERAN' shirt wandered into the
                    Abandoned Trailer Park.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    The other man did not even look at Little Billy as he walked past. 
                    Little Billy was suddenly afraid. He did not know what a 'Crackhead' was, 
                    but he guessed the man who went into the Abandoned Trailer Park might be one.  
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    The way Little Billy saw it, he had two options. He could either stick to the plan and go 
                    ask the man wearing the 'VIETNAM VETERAN' shirt what a 'Crackhead' was, or he could head 
                    back and meet his friends in the park.  
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    'I'm going in!' Little Billy shouted, sounding more brave than he really felt. '_________'. 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 
                          
        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He stood on an old milk crate and looked through a window of broken glass into 
                    the decayed remains of someone's former home. He picked up a broken bottle and
                    smashed it on the concrete.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                     It felt good, so he picked up another and threw it through a window, 
                     which broke into a thousand shards. That scared and excited Little Billy. 
                     He picked up a third bottle. '_________'. 
                   
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                     
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    This one still had liquid in it. He smelled it. 'EWWWW',
                    he said. 'It smells like sour bread!' From the shadows, he heard a scary, 
                    dark laugh that became a heavy cough. It was the man who didn't have shoes.  
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    The chaos he had caused with the bottles was making
                    Little Billy feel very brave. He asked the man, 'Do you have a crack on 
                    your head? What's a Vietnam?' In a brief moment of coherence, the man said '_________'.  
                     
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Little Billy laughed and laughed. The man looked at him and went 'BARK BARK' like a dog. 
                    He dropped down on all fours and started chasing Little Billy. The man had not had any crack all day, 
                    and he was starting to suffer from 'Cocaine Psychosis. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    Little Billy was very, very scared. He was so scared that he peed in his 
                    own jeans, which is not a big deal and happens to the best of us. 
                    He took off running. The crackhead was '_________' fast.",
                    
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He caught Little Billy in ONE TWO THREE FOUR FIVE seconds. Billy's face hit the ground. 
                    The crackhead rifled through Little Billy's pockets and found a five dollar bill that Little Billy 
                    had stolen from his Mommy's purse that morning. 
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                     Little Billy was crying, 'BOO HOO HOO!' The Crackhead was laughing 'HA HA HA'. 
                     The Crackhead had been waiting all day as patiently as his addled body and brain would let him, 
                     and he finally had enough money to get his fix
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He didn't look back at Little Billy, but he called out, '_________'  
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He left to find his dealer. Little Billy sat crying on the ground with a bloody nose. 
                    He decided right then and there that he would always listen to his
                    Mommy when she told him things, because she probably just wanted to keep him safe.  
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    The Crackhead learned two even more valuable lessons: children make easy targets, and 
                    SLOW AND STEADY WINS THE CRACK. Daddy never did come back from getting 
                    Milk and Cigarettes. Mommy and Little Billy had to move to the bad neighborhood   
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    by the railroad tracks, where many of Little Billy's friends grew up to be crackheads. 
                    Little Billy remembered what had happened to him and stayed far away from drugs. He got 
                    out of the bad neighborhood, 
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    and got filthy rich in the logging industry. His actions helped end The Amazon Rainforest, and he got a large
                    bonus from his boss. THE END
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    <img src={require('../images/back_cover.png')} alt='park'/>
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    Little Billy, on the other hand, was the fastest boy in his class. 'You'll never catch me he shouted, '_________'.  
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He was trying to reach the entrance so he could escape, but the Crackhead was boxing him in. Little Billy knew that
                    his only chance of escape was a slow, long campaign. He had much higher stamina than the mean, old veteran.   
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He pulled off several successful jukes, always moving. Eventually the crackhead got very, very tired. 
                    'YAWN', he said,
                    and fell to the ground in a dead faint. Billy towered over him, saying '_________'.  
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
          <Book.Side><article className='page'>
                <p className='text-box'>
                    He left the trailer park, with a valuable life lesson: SLOW AND STEADY WINS THE RACE. 
                    That lesson stayed with him over the years. He started a
                    disinformation campaign to destabilize Western Democracy on the orders of Vladimir Putin.
                </p>
            </article>
          </Book.Side>
          <Book.Side>
            <article className='page'>
                 <p className='text-box'> 
                    He was eventually compromised and disposed of by his own handlers, only days before the glorious 
                    reunification of the Soviet Empire.
                    THE END
                </p>
            </article>
          </Book.Side>
        </Book.Page> 

        <Book.Page>
              <article className='page'>
                <img src={require('../images/back_cover.png')} alt='park'/>
            </article>
        </Book.Page>  */}
  {/* </Book> */}
  </div>
  </div>
              
        )
    }
}