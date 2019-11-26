import React from 'react';
import '../css/ParkStory.css'
import FlipPage from "react-flip-page"

export default class ParkStory extends React.Component {

    constructor(props){
        super(props);
        this.state={
            showCategories: false,
            villian_quotes: this.props.quotes.filter(quote => quote.category === 'villian'), 
            diet_quotes: this.props.quotes.filter(quote => quote.category === 'diet'), 
            help_quotes: this.props.quotes.filter(quote => quote.category === 'help'), 
            sadness_quotes: this.props.quotes.filter(quote => quote.category === 'sadness'), 
            gluttony_quotes: this.props.quotes.filter(quote => quote.category === 'gluttony'), 
            despair_quotes: this.props.quotes.filter(quote => quote.category === 'despair'), 
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

    getRandomQuote = (state) => {
        let selectedQuote = state[Math.floor(Math.random() * state.length)]
        return selectedQuote.content
    }

    showCategorySelector = () => {
        this.setState({
            showCategories: true
        })
    }

    render(){
        // console.log(this.state.communism_quotes)
        console.log(this.getRandomQuote(this.state.capitalism_quotes))
        // console.log(this.state.communism_quotes)
        return(
            <div className='shelf-bg'>
                {this.state.showCategories ? 
                <div>
                  <div id='category-picker'></div> 
                  <div id='chalkboard-text'>Choose A Category</div>
                </div>
              :
              null
                }
                <FlipPage 
                className="park-story-book"
                orientation='horizontal'
                showTouchHint
                loopForever
                width= '560'
                height= '590'
                flipOnTouch
                animationDuration='400'
                maskOpacity='0.8'
                uncutPages='true'
                >
                <article>
                    <img src={require('../images/ParkCoverLg.png')} alt='park'/>
                </article>
  <article className="page">
      The clock on Little Billy's bedside table went 'BUZZZ! BUZZZ!' He sat up, still feeling a little bit sleepy. 
            He walked to his window and looked out. There was snow everywhere! He thought to himself 
            <button className='category-select-button' id='wake-up' onClick={() => this.showCategorySelector()}></button>
  </article>
  <article className="page">
      "He looked at the calendar Mommy made him and saw that it was Saturday. 'Hey! It's Saturday! That means no school today! Feeling very, very excited now, and not even a 
            little bit sleepy, he ran downstairs. 
  </article>
  <article className="page">
      Mommy was in the kitchen, busy as a bee making breakfast. Pancakes! Pancakes were Little Billy's favorite! 
            It smelled very yummy. 'Good morning Pumpkin!', Mommy said. 'It's very snowy outside! What do you want to do?' 
</article>
<article className="page"> Little Billy began talking very fast. He had big plans, and each one sounded so much fun. 'That's nice, dear', 
            Mommy said, but, as adults sometimes do when children are yapping, she wasn't 
            really listening.
            </article>
            <article className="page">
            She was lost in thought, thinking about 
            <div>'_________'.</div>
            </article>
            <article className="page">
            Billy stopped eating and looked at her. He did not know what she was talking about. She did not seem to notice that Little Billy
           was there. He decided it was better not to ask questions,
           because sometimes questions made Mommy very mad. 
            </article>
            <article className="page">
            Mommy went and poured some special Mommy juice into her cup of coffee. Little Billy thought
           coffee smelled very good when it was being made, but after Mommy put her special juice into it, he thought it smelled very yucky.
            </article>
            <article className="page">
            It also made Mommy act very funny.
           Little Billy decided to eat his food as '_________' as possible. Before Daddy had gone out for Milk and Cigarettes last week, he always used to say: 
            </article>
            <article className="page">
            Little Billy was cramming pancakes into his chubby little cheeks as fast as he could. He was so excited. 
           Pancakes, Snow, Saturday...it was just too perfect! He was so full of happy thoughts 
           that he didn't notice that he could not breathe.
            </article>
            <article className="page">
            There were sweet syrupy pancakes clogging up his pipes! He was choking to death! If he had a mirror, he would see that he was turning purple! He tried to call out to
           Mommy, but the pancakes were stuck in his throat and he could not talk!
            </article>
            <article className="page">
            Mommy did not see Billy either. She was staring out the window with that
           far away look in her eyes that grownups almost always have. She finally turned around when she heard Little Billy's body crash to the floor!
            </article>
            <article className="page">
            'Little Billy,' she shouted! She rolled him over onto his Little big belly. She pounded on it and
           pounded on it, not knowing what to do. Sadly, it was just too late. The pancakes had gotten the best of Little Billy.
           Feeling '_________'
            </article>
            <article className="page">
            " mother cried  out, '_________'. She held the pitiful, lifeless carcass of her first born son, Little Billy. She
           wished only that she had taught her son not to eat so fast, because:<br></br> SLOW AND STEADY WINS THE RACE.
            </article>
            <article className="page">
            Little Billy took his time eating, which was a very wise thing for a small boy to do. Mommy didn't talk very much, so Billy sat quietly and tried to decide what he
           wanted to do first. He finally came up with two very clever ideas. 
            </article>
            <article className="page">
            He
           could go and find his friends, who were probably all playing in the park, OR, he could go to the place that Mommy always said he was not supposed to go:
           The abandoned Trailer Park down by the railroad tracks. '_________'
            </article>
            <article className="page">
            Little Billy was an obedient boy. He did not want to upset Mommy, who was crying and laughing while dancing all alone in the kitchen,
           so he decided to go to the park. 
            </article>
            <article className="page">
            He grabbed his boots, and laced them up. He put on his coat,
           a scarf, some nice warm gloves, and opened the front door out into the wide world. He yelled, 'I'm going to the park! HOORAY!'",
            </article>
            <article className="page">
                Little Billy was feeling very naughty. Mommy was crying and laughing while dancing all alone in the kitchen, so without saying a word,
                he tip-toed out of the kitchen. He grabbed his boots, and laced them up. He put on his coat,
                a scarf, some nice warm gloves, and opened the front door out into the wide world. 
            </article>
            <article className="page">
            and opened the front door out into the wide world. A strange gleam appeared in his eye.
           'Here I come, abandoned Trailer Park down by the railroad tracks,' he said quietly to himself, 'soon your secrets will be mine!'
            </article>
            <article className="page">
            It was very cold. 'BRRRR', said Little Billy. He felt like it was taking forever to get to the park. He thought about how there would probably be a
           snowball fight. He could make a Snowman. He could lay down in the snow and make Snow Angels.
            </article>
            <article className="page">
            There were so many options for having fun! Little Billy finally saw the playground up ahead and knew he was close.
           He could see lots of other children already playing. He started to run, not wanting to miss out on any more activities. 
            </article>
            <article className="page">
            Little Billy was fast,
           the fastest person in his class. He saw some of his friends having a footrace by the slide. He said 'Hello, everyone!' as they ran across the finish line.
           There was a new girl that Billy had never seen before standing nearby. 
            </article>
            <article className="page">
            'Who are you?,' he asked. 'I'm Becky. I'm the new kid in town,' she said. Little Billy looked her up and down. She was not as tall as Billy, and he saw that one of her little legs was shorter than
           the other one.
            </article>
            <article className="page">
            Just then, a very, very '_________' idea came to Little Billy's mind.
           Billy thought, 'I just know I can run faster than her! I will challenge her to a race, because
            </article>
            <article className="page">
            it will be an easy win.' Little Billy didn't even stop to consider how it would make Becky feel. '_________',  he said aloud.
            </article>
            <article className="page">
            His friend Carlos, who was standing beside Little Billy, opened his eyes wide and backed up a couple steps. This was a
           side of Little Billy he had never seen, and it was very, very scary. To Becky he said, 'I bet I'm twice as fast as you, slow-poke! 
            </article>
            <article className="page">
            Are you too chicken to race me?' She scrunched up her face like she might cry. 'Don't call me names! Even if you are
           faster than me, I bet I can beat you in a race anyway.' 'NO WAY,'' Little Billy said, 'let's do it!'
            </article>
            <article className="page">
            He smiled a very big smile and looked at Carlos. Years later, Carlos would remember that moment and think to himself how Little Billy's smile did not quite reach his eyes.
            He told his therapist all about it.
            </article>
            <article className="page">
            he other children gathered around. Carlos said, 'Okay, I want a good clean race! First person to the big tree on the other side of the park wins. Ready, set, GO!' Little Billy took off running. 
            </article>
            <article className="page">
                He ran faster than he had ever run in his life,
           all the while cackling maniacally to himself, just like Mommy had laughed back in the kitchen over breakfast. When he was almost at the big, old tree, he looked back and saw that Becky was still by the slide. 
            </article>
            <article className="page">
            Why, she had barely moved! She was
           walking, not even running! He jumped up and down, knowing that it was impossible for him to lose. He saw his friend Juan-Pablo smoking a candy cigarette by the monkey bars.
            </article>
            <article className="page">
            Little Billy thought, 'I have plenty of time. I'll take a break, and I will
           still win this race!' He walked over and started talking to Juan-Pablo. 'Hey, Little Billy,' Juan-Pablo said. 'Care for a candy cigarette?'
                </article>
                <article className="page">
                Little Billy accepted and started puffing away. 'Today I read something neat', Juan-Pablo said. '_________'. 
                </article>
                <article className="page">
                Little Billy '_________'. I think '_________', he said to Juan Pablo.
                </article>
                <article className="page">
                They kept talking back and forth. It was a fantastic argument on the topic, and both interlocutors had well researched opinions on the matter, given that they were only 9 and three-quarters
           years old.
                </article>
                <article className="page">
                It went on for so long, in fact, that Little Billy didn't notice Becky walk slowly past them. When the other children let out a cheer, Little Billy looked up, horrified. He dropped his candy cigarette, mashed it in the dirt with his foot, and
           took off running. 
                </article>
                <article className="page">
                She was still walking, lifting her little leg high and sort of dragging the littler one behind her. Little Billy might still be able to beat her! He pushed himself harder than he ever had, harder than he thought a little
           boy like him could even push. 
                </article>
                <article className="page">
                He was gaining on her, and gaining. He was the eensiest-weensiest bit too late. Becky crossed the finish line just before he did. She had won the race. With a new found sense of strength she did not know she possessed, Becky said, '_________'
                </article>
                <article className="page">
                Billy was '_________'. He shouted back, '_________'.
                </article>
                <article className="page">
                All of the strength Becky thought she had left her at once. She started crying as Billy finished his rant and charged at her. 
                She started to really run this time, crying big crocodile tears. Luckily, her Mommy has just been coming to get her. 
                </article>
                <article className="page">
                She ran up just in time to stop Little Billy from doing a very mean thing. Becky's mommy dragged Little Billy by the ear back to his own house. 
                She told his mommy exactly what had happened. 
                </article>
                <article className="page">
                Little Billy was put into time out for the rest
           of the weekend and had to stay in his room. He learned several valuable lessons that day, namely: <br></br> SLOW AND STEADY WINS THE RACE.
                </article>
                <article className="page">
                While this applied to the actual race he had lost in the park, he also sat scheming about how he would SLOWLY AND STEADILY WIN THE RACE
           of plotting his revenge against Becky. 
                </article>
                <article className="page">
                He made several very, very not nice drawings of what he planned to do. Luckily Mommy found them, and took him to see a counselor. Little Billy really benefited from those sessions and became a very sweet little boy.
                THE END
                </article>
                <article className="page">
                Becky smiled brightly at Little Billy. It seemed like they had both learned something about themselves. When they grew up, they got married. Becky was the first female President, and Little Billy became a professional runner in the Olympics.
                </article>
                <article className="page">
                He took home the gold in four separate games. It was all thanks to the valuable lesson: SLOW AND STEADY WINS THE RACE. Sadly, Little Billy was later indicted on several counts of doping charges, and stripped of his medals.
                </article>
                <article className="page">
                Becky was booted out of office after it came to light that she was
                receiving kickbacks from the oil industry and was actively preventing the green energy revolution, while simultaneously opening up channels for the Russians to interfere in domestic politics. 
                </article>
                <article className="page">
                They both got too greedy in their lustful search for power. If only they'd remembered that fateful lesson from earlier: SLOW AND STEADY WINS THE RACE.
                The END
                </article>
                <article className="page">
                that way I can let her win!' It's hard to make friends when you are in a new town and don't know anybody. If she wins the race, everyone will like her, and she will feel like she's already
                friends with us! It's a very nice thing to do.'
                </article>
                <article className="page">
                Little Billy remembered watching televison with Daddy long ago before he went out for Milk and Cigarettes. Daddy had poured some of Mommy's special juice into
            a very, very big cup, then sat down to watch a program called 'The News'.
                </article>
                <article className="page">
                Little Billy thought it was a very boring show. There were no cartoons! Daddy said there WAS a cartoon character in
           The News all the time, and that the cartoon character was the boss of the whole country!
                </article>
                <article className="page">
                Little Billy did not understand, and walked away. Daddy yelled something about 'Virtue Signaling' at The News. Little Billy asked
                Mommy what that was. Mommy looked embarrassed about Daddy.
                </article>
                <article className="page">
                She said, 'Oh, nothing, Pumpkin, it's just when, like, a little boy does something really nice for a little girl, because he really means it.' Little Billy liked that, so he decided he would
           do Virtue Signaling for Becky now.
                </article>
                <article className="page">
                The other children gathered around. Carlos said, 'Okay, I want a good clean race! First person to the big tree on 
                the other side of the park wins. Ready, set, GO!' Little Billy started running. 
                </article>
                <article className="page">
                He ran slower than he had ever run in his life, all the while smiling to himself. Both he and Becky were going to feel really good after this.
                When he was halfway to the tree, he looked back and saw that Becky was still by the slide.
                </article>
                <article className="page">
                She had barely moved! She was
                walking, not even running! He stopped and pretended to be tired. It was going to be hard for him to lose. 
                He saw his friend Juan-Pablo smoking a candy cigarette by the monkey bars.
                    </article>
                    <article className="page">
                    Little Billy thought, 'I'll pretend like I need a break!' He walked over and started talking to Juan-Pablo. 
                    'Hey, Little Billy,' Juan-Pablo said. 'Today I read something neat.' '_________'
                    </article>
                    <article className="page">
                    Little Billy agreed with Juan-Pablo, but didn't
           have enough time to engage in the finer points of the topic. Becky was ahead of him now.
                    </article>
                    <article className="page">
                    She was still walking, lifting her little leg high and sort of dragging the littler one behind her inch by inch. Little Billy thought he should put on a good show.
                    He started running again at a slow pace. He was gaining on her, and gaining.
                    </article>
                    <article className="page">
                    He timed it just right. Becky crossed the finish line just before he did. She had won the race. With a new found sense of strength she did not know she possessed, Becky said, '_________'.
                    </article>
                    <article className="page">
                    The kids crowded around, saying how great Becky was. It really helped her self esteem a lot. 
                    She became really popular at school, but the other kids started being mean to Billy because he had lost the race.
                    </article>
                    <article className="page">
                    Billy didn't understand. He just wanted to be nice, but the other children saw his action as weakness
                    and pounced. Becky was Little Billy's only friend all through middle school and high school.
                    </article>
                    <article className="page">
                    He fell in love with her, but didn't tell her until it was time for the 8th grade dance. She said she loved him too, but only as a friend. That made Billy very sad,
                    and also very angry.
                    </article>
                    <article className="page">
                    He hated women after that. He got really into Men's Rights. Luckily in high school he started hanging out with weird art and theatre kids,
                     and he got over the Red Pill stuff because it's a really bad, flawed ideology.
                    </article>
                    <article className="page">
                    One night senior year, Becky got dumped by her jerk boyfriend who liked football and Toxic Masculinity. She called Billy, 
                    who wasn't so Little anymore. They met up and talked, and made out for a little bit. 
                    </article>
                    <article className="page">
                    They dated, then got married too young. Little Billy thought about that fateful day he threw the race against Becky. 
                    Even though it made his life suck for a bit, it had paid off in the end because: SLOW AND STEADY WINS THE RACE.
                    </article>
                    <article className="page">
                    It was cool for awhile, but monogamy is an artificial constraint imposed upon the masses by religious zealots. They divorced 
                    in college. They were mature about it, and are still friends who hook up when they are drunk and lonely.
                    </article>
                    <article className="page">
                    Knowing that he would be punished if Mommy found out, he snuck down an alleyway and headed uptown to the 'bad neighborhood.' 'What Mommy doesn't know won't hurt her,' Little Billy said, with a flutter in his tummy. '_________'.
                    </article>
                    <article className="page">
                    As he tip-toed over the broken glass and trash, across the railroad tracks, he saw the Abandoned Trailer Park up ahead. Two strangers were walking in different directions in front of him. One of them had very nice hair, and a very clean
           suit.
                    </article>
                    <article className="page">
                    His shoes and tie were in perfect order. He had a briefcase. The other man was very skinny. His hair was falling out. He was very old, and his shirt was very dirty. Billy
                    was a very good reader, and sounded out the words on the shirt.
                    </article>
                    <article className="page">
                    'VI. ET. NAM. VET. ER. AN.' This man did not have a tie, or a briefcase, or shoes. He was shivering a lot, and kept yelling things that Little Billy could not understand.
                    As the two men passed each other, 
                    </article>
                    <article className="page">
                    Little Billy heard the one wearing shoes say 'Nothing but Crackheads up here, I ain't investing a dime!' The man who was wearing the 'VIETNAM VETERAN' shirt wandered into the
                    Abandoned Trailer Park.
                    </article>
                    <article className="page">
                    The other man did not even look at Little Billy as he walked past. Little Billy was suddenly afraid. He did not know what a 'Crackhead' was, but he guessed the man who went into the Abandoned Trailer Park might be one.   
                    </article>
                    <article className="page">
                    The way Little Billy saw it, he had two options. He could either stick to the plan and go ask the man wearing the 'VIETNAM VETERAN' shirt what a 'Crackhead' was, or he could head back and meet his friends in the park.
                    </article>
                    <article className="page">
                    'I'm going in!' Little Billy shouted, sounding more brave than he really felt. '_________'. 
                    </article>
                    <article className="page">
                    He stood on an old milk crate and looked through a window of broken glass into the decayed remains of someone's former home. He picked up a broken bottle and
                    smashed it on the concrete.
                    </article>
                    <article className="page">
                    It felt good, so he picked up another and threw it through a window, which broke into a thousand shards. That scared and excited Little Billy. He picked up a third bottle. '_________'. 
                    </article>
                    <article className="page">
                    This one still had liquid in it. He smelled it. 'EWWWW',
                    he said. 'It smells like sour bread!' From the shadows, he heard a scary, dark laugh that became a heavy cough. It was the man who didn't have shoes.
                    </article>
                    <article className="page">
                     The chaos he had caused with the bottles was making
                    Little Billy feel very brave. He asked the man, 'Do you have a crack on your head? What's a Vietnam?' In a brief moment of coherence, the man said '_________'.  
                    </article>
                    <article className="page">
                    Little Billy laughed and laughed. The man
                    looked at him and went 'BARK BARK' like a dog. He dropped down on all fours and started chasing Little Billy. The man had not had any crack all day, and he was
                    starting to suffer from 'Cocaine Psychosis'.
                    </article>
                    <article className="page">
                    Little Billy was very, very scared. He was so scared that he peed in his own jeans. He took off running. The crackhead was '_________' fast.",
                    </article>
                    <article className="page">
                    He caught Little Billy in ONE TWO THREE FOUR FIVE seconds. Billy's face hit the ground. The crackhead rifled through Little Billy's pockets and found a five dollar bill that Billy had stolen from his Mommy's
                    purse that morning. 
                    </article>
                    <article className="page">
                    Little Billy was crying, 'BOO HOO HOO!' The Crackhead was laughing 'HA HA HA'. The Crackhead had been waiting all day as patiently as his addled body and brain would let him, and he finally had enough money for his fix.
                    </article>
                    <article className="page">
                    He didn't look back at Little Billy, but he called out, '_________'
                    </article>
                    <article className="page">
                    He left to find his dealer. Little Billy sat crying on the ground with a bloody nose. Billy decided right then and there that he would always listen to his
                    Mommy when she told him things, because she probably just wanted to keep him safe. 
                    </article>
                    <article className="page">
                    The Crackhead learned two even more valuable lessons: children make easy targets, and SLOW AND STEADY WINS THE CRACK.
                    
                    </article>
                    <article className="page">
                    Little Billy's Daddy never did come back from getting Milk and Cigarettes. Mommy and Little Billy had to move to the bad neighborhood by the railroad tracks, where many of Little Billy's friends grew up to be crackheads. 
                    </article>
                    <article className="page">
                    Little Billy remembered what had happened to him and stayed far away from drugs. He got out of the bad neighborhood and got filthy rich in the logging industry. His actions helped end The Amazon Rainforest, and he got a large
                    bonus from his boss.
                    </article>
                    <article className="page">
                    "Little Billy, on the other hand, was the fastest boy in his class. 'You'll never catch me he shouted, '_________'. 
                    </article>
                    <article className="page">
                    He was trying to reach the entrance so he could escape, but the Crackhead was boxing him in. Little Billy knew that
                    his only chance of escape was a slow, long campaign. He had much higher stamina than the mean, old veteran.
                    </article>
                    <article className="page">
                    He pulled off several successful jukes, always moving. Eventually the crackhead got very, very tired. 'YAWN', he said,
                    and fell to the ground in a dead faint. Billy towered over him, saying '_________'.
                    </article>
                    <article className="page">
                    He left the trailer park, with a valuable life lesson: SLOW AND STEADY WINS THE RACE. That lesson stayed with him over the years. He started a
                    disinformation campaign to destabilize Western Democracy on the orders of Vladimir Putin.
                    </article>
                    <article className="page">
                    He was eventually compromised and disposed of by his own handlers, only days before the glorious reunification of the Soviet Empire.
                    THE END
                     </article>


</FlipPage> 
            </div>
        )
    }
}