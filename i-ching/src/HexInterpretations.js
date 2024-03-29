const Hex = [
    {
        id: 1,
        title: 'The Creative',
        description: 'Quiet your mind. Slow the frantic energy.  This Hexagram is showing you that if you make space for your creative energy, success and good fortune will follow.',
        image: '/assets/images/1.png',
        upper: 'Heaven',
        lower: 'Heaven',
    },
    {
        id: 2,
        title: 'The Receptive',
        description: 'This Hexagram questions if you are balanced.  Are you on the right path?  The things you do and work on, are they fueled by true motivation or are they clouded by concerns of others, desire for recognition, etc.  This is a time for gentleness, modesty, and receptiveness.',
        image: '/assets/images/2.png',
        upper: 'Earth',
        lower: 'Earth',
    },
    {
        id: 3,
        title: 'Difficulty at the Beginnging',
        description: 'One of the more straight forward Hexagrams.  This Hexagram was interpreted by ancient sages as a blade of grass trying to break through an obstacle before it sprouts out of the earth.  This Hexagram explicity calls for nonaction.  Bear the discomfort of your situation and the chaos will clear.',
        image: '/assets/images/3.png',
        upper: 'Water',
        lower: 'Thunder',
    },
    {
        id: 4,
        title: 'Youthful Folly',
        description: 'This Hexagram acknowledges a spiritual immaturity. It represents fear, anxiety and doubt, even in this reading.  Perhaps you must suspend your mistrust of the unknown.  Let go of preconceived notions of past and future and focus on the immediate.  There is no shame in acknowledging youthful folly, it is the first step toward growth.',
        image: '/assets/images/4.png',
        upper: 'Mountain',
        lower: 'Water',
    },
    {
        id: 5,
        title: 'Waiting',
        description: 'This Hexagram insists that there is a situation that cannot be corrected by force. Misfortune will unfold if attention to detail is not paid in full. Do not sit idly by in discomfort; instead practice patience and careful attention. Be careful not to compare yourself or siutation to others.',
        image: '/assets/images/5.png',
        upper: 'Water',
        lower: 'Heaven',
    },
    {
        id: 6,
        title: 'Conflict',
        description: 'This Hexagram highlights an imbalance. A departure from inner clarity can cause feelings of anxiety, doubt, fear or impatience. Students of the I Ching recognize that all conflict is inner conflict. If you follow the negative atributes of conflict, misfortune will unfold. This Hexagram urges you to disengage momentarily with a problem and to return to quiet contemplation.',
        image: '/assets/images/6.png',
        upper: 'Heaven',
        lower: 'Water',
    },
    {
        id: 7,
        title: 'The Army',
        description: 'Life consists of trials and challenges. How you conduct yourself in these wars will determine whether the wars are won or lost. A general who leads their army with brutality and fear runs the risk of losing the support of his/her army when they need it the most. On the flip side, a general who rules by humane example has the potential to influence inspiration. What type of general are you going to be?',
        image: '/assets/images/7.png',
        upper: 'Earth',
        lower: 'Water',
    },
    {
        id: 8,
        title: 'Holding Together (Union)',
        description: 'Water over Earth.  This Hexagram shows that union with others can often be helpful to the individual parties. Think of rain falling to the Earth.  They compliment and help each other.',
        image: '/assets/images/8.png',
        upper: 'Water',
        lower: 'Earth',
    },
    {
        id: 9,
        title: 'The Taming of the Small Power',
        description: 'This Hexagram shows that the dark is currently enveloping the light. It warns against ambitious behavior and urges to practice tolerance and neutrality while taking small and calculated steps.',
        image: '/assets/images/9.png',
        upper: 'Wind',
        lower: 'Heaven',
    },
    {
        id: 10,
        title: 'Treading (Conduct)',
        description: 'Tread lightly. This Hexagram is described as trying to stand on the tail of a tiger.  If you practice sincerity, humility, gentleness, you can tread anywhere.  Even on the tail of a tiger.',
        image: '/assets/images/10.png',
        upper: 'Heaven',
        lower: 'Lake',
    },
    {
        id: 11,
        title: 'Peace',
        description: 'This Hexagram shows a strong flow of energy, harmony and prosperity and also suggests that this energy is the reward for work done.  Stay humble.  Peace.',
        image: '/assets/images/11.png',
        upper: 'Earth',
        lower: 'Heaven',
    },
    {
        id: 12,
        title: 'Standstill',
        description: 'This hexagram shows that inferior influences are affecting you in a negative way.  Energy vampires are real.  When they feed you may feel stuck.  The only way to become un-stuck is to look inward.  Seek solitude and find yourself.  Cut off the energy vampires, even if temporarily.',
        image: '/assets/images/12.png',
        upper: 'Heaven',
        lower: 'Earth',
    },
    {
        id: 13,
        title: 'Fellowship With Others',
        description: 'This hexagram acknowledges how important relationships with others are.  Relationships in love, work, family, and friendship when practiced with equanimity and openness may actually be essential for success.',
        image: '/assets/images/13.png',
        upper: 'Heaven',
        lower: 'Fire',
    },
    {
        id: 14,
        title: 'Great Possessing',
        description: "This Hexagram is showing that hard work is paying off and you may already be experiencing some success.  Don't throw off your balance with pride.  Stay humble.",
        image: '/assets/images/14.png',
        upper: 'Fire',
        lower: 'Heaven',
    },
    {
        id: 15,
        title: 'Humility',
        description: 'Modesty is the key right now.  Active humility over nonactive ego indulgences.',
        image: '/assets/images/15.png',
        upper: 'Earth',
        lower: 'Mountain',
    },
    {
        id: 16,
        title: 'Enthusiasm',
        description: 'The I Ching likes to split situations in life as roads of fortune and misfortune.  This Hexagram teaches that listening to your enthusiam is essential to choosing the correct path.  If your enthusiam is ego driven you may be on a path to misfortune.',
        image: '/assets/images/16.png',
        upper: 'Thunder',
        lower: 'Earth',
    },
    {
        id: 17,
        title: 'Following',
        description: 'Go with the flow.  Do not resist.  Follow the current flow.  You do not have to celebrate current situations or developments but you should not resist at the moment.  Acceptance is key right now.',
        image: '/assets/images/17.png',
        upper: 'Lake',
        lower: 'Thunder',
    },
    {
        id: 18,
        title: 'Decay',
        description: 'Work on what has been spoiled.  Something negative has settled in.  Possibly greed, stagnation, anger, vengeful thinking, or other ego driven negativities.  The I Ching offers specific intruction to root out this decay.  It suggests three full days of deliberation of the defect, one day working on a resolve and then three final days of action to ensure issue does not arise again.  One week from right now, what will be different?',
        image: '/assets/images/18.png',
        upper: 'Mountain',
        lower: 'Wind',
    },
    {
        id: 19,
        title: 'Approach',
        description: 'Just as the warmth of spring approaches the cold of winter, beneficial influences are approaching.  You are on the right track.  Steadfast humility will guarantee success.',
        image: '/assets/images/19.png',
        upper: 'Earth',
        lower: 'Lake',
    },
    {
        id: 20,
        title: 'Contemplation',
        description: 'Sacrifice the harsh judgement of the ego.  This Hexagram shows that a self correction must be made through contemplation.  Anxiety fades in quiet contemplation.',
        image: '/assets/images/20.png',
        upper: 'Wind',
        lower: 'Earth',
    },
    {
        id: 21,
        title: 'Biting Through',
        description: 'This Hexagram warns that aggressive action and/or intervention will compound misfortune.  Obstacles are present.  Withdraw inward.  Forgive but do not forget',
        image: '/assets/images/21.png',
        upper: 'Fire',
        lower: 'Thunder',
    },
    {
        id: 22,
        title: 'Grace',
        description: "This Hexagram encourages outward grace.  It is a reminder that you catch more flies with honey than you do you with vinegar.  Don't be an asshole and not only will you feel better but success will follow.",
        image: '/assets/images/22.png',
        upper: 'Mountain',
        lower: 'Fire',
    },
    {
        id: 23,
        title: 'Splitting Apart',
        description: 'Receiving this Hexagram indicates that a period has been entered where inferior and negative influences will prevail.  The I Ching describes that in this period, you may feel like you are being split apart from from your higher self.  Be like a mountain on the earth.  Be still, quiet and strong.',
        image: '/assets/images/23.png',
        upper: 'Mountain',
        lower: 'Earth',
    },
    {
        id: 24,
        title: 'Return',
        description: 'This Hexagram indicates that light is about to return.  Think of your situation like a winter solstice.  There is still much darkness but be sure that the dark will soon make room for light.',
        image: '/assets/images/24.png',
        upper: 'Earth',
        lower: 'Thunder',
    },
    {
        id: 25,
        title: 'Innocence',
        description: "The I Ching constantly encourages the active practice of innocence.  This Hexagram stresses that an innocent mind is essential for success.  Zen masters call this the beginner's mind.  Killing the ego is essential.",
        image: '/assets/images/25.png',
        upper: 'Heaven',
        lower: 'Thunder',
    },
    {
        id: 26,
        title: 'Taming the Power of the Great',
        description: 'You can only be brave when faced with a challenge.  Challenges are present.  Will they break you or will you tame your own greatness?',
        image: '/assets/images/26.png',
        upper: 'Mountain',
        lower: 'Heaven',
    },
    {
        id: 27,
        title: 'The Corners of the Mouth',
        description: 'Providing Nourishment.  This Hexagram is often interpreted as an open mouth.  It serves as a reminder to feed not just the body but the soul.  All energy depletes and needs to be nourished.',
        image: '/assets/images/27.png',
        upper: 'Mountain',
        lower: 'Thunder',
    },
    {
        id: 28,
        title: 'Preponderance of the Great',
        description: 'Ancient sages describe this Hexagram depicting a beam under pressure that is about to give out.  Let this be an analogy for your current situation.  Force, anger, desire, and fear will ensure the beam breaks.  Be gentle, firm, and humble and you will find success.',
        image: '/assets/images/28.png',
        upper: 'Lake',
        lower: 'Wind',
    },
    {
        id: 29,
        title: 'The Abysmal',
        description: 'Water over water.  Flow like water through difficult situations.  The abyss is near or already here.  Remain unstructured and open.  Do not act out of fear, despair or frustration.  Do not force your way out, flow your way out.',
        image: '/assets/images/29.png',
        upper: 'Water',
        lower: 'Water',
    },
    {
        id: 30,
        title: 'Fire',
        description: 'Fire over Fire.  The ancient sages have described this Hexagram as a log burning in a fire.  This Hexagram reminds us that while fire can be dangerous it is also extremely necessary.  Fire requires fuel for warmth and light.  Do not deprive yourself of fuel to burn.',
        image: '/assets/images/30.png',
        upper: 'Fire',
        lower: 'Fire',
    },
    {
        id: 31,
        title: 'Influence',
        description: 'This Hexagram shows that there is an influence coming your way.  It could be a pleasant or inspiring interaction or a disturbing event.  It may be wise to practice equanimity right now.',
        image: '/assets/images/31.png',
        upper: 'Lake',
        lower: 'Mountain',
    },
    {
        id: 32,
        title: 'Duration',
        description: 'Hold fast.  Remain steady and give the situation space to shape itself.  This Hexagram is encouraging you to continue to endure and you will move forward.',
        image: '/assets/images/32.png',
        upper: 'Thunder',
        lower: 'Wind',
    },
    {
        id: 33,
        title: 'Retreat',
        description: 'There is no shame in retreat.  The I Ching teaches that darkness swells like a rising tide in the balance of life.  Darkness is swelling and now is a time for retreat.  Disengage, practice stillness and stay out of the reach of danger.',
        image: '/assets/images/33.png',
        upper: 'Heaven',
        lower: 'Mountain',
    },
    {
        id: 34,
        title: 'The Power of the Great',
        description: 'This Hexagram is interesting because it both shows proof of spiritual progress and carries a warning not to misuse your spiritual strength with judgement, condeming, punishment, manipulation or dismissing of others.  Maintain equanimity.',
        image: '/assets/images/34.png',
        upper: 'Thunder',
        lower: 'Heaven',
    },
    {
        id: 35,
        title: 'Progress',
        description: 'The ancient sages have deciphered this Hexagram as the sun rising over the Earth.  A symbol of a new dawn.  Success has arrived or will arrive shortly.  Do not fall into the trappings of the ego.  Stay humble.',
        image: '/assets/images/35.png',
        upper: 'Fire',
        lower: 'Earth',
    },
    {
        id: 36,
        title: 'Darkening of the Light',
        description: "This Hexagram depicts the sun being consumed by the Earth. nDarkness and negativity approach.  Darkness is essential to balance, do not fight it.  Progress may be difficult to see right now.  Remember Shakyamuni Buddha's famous last words: Be a lamp unto yourself.",
        image: '/assets/images/36.png',
        upper: 'Earth',
        lower: 'Fire',
    },
    {
        id: 37,
        title: 'The Family',
        description: 'Receiving this Hexagram is a reminder that community, family and friendship can be crucial for success.  These relationships must be approached with love, faithfulness and correctness.  See the balance that the individual supports the community and that community supports the individual.',
        image: '/assets/images/37.png',
        upper: 'Wind',
        lower: 'Fire',
    },
    {
        id: 38,
        title: 'Opposition',
        description: 'Something is tempting you into negative thoughts.  Anxiety about the future, mistrust of another person, fear of failure.  Do not to fall into the trap of thinking that life is working against you.  This Hexagram shows that you may be preventing your own progress.  Look inward.',
        image: '/assets/images/38.png',
        upper: 'Fire',
        lower: 'Lake',
    },
    {
        id: 39,
        title: 'Obstruction',
        description: 'This Hexagram shows that you are between a rock and a hard place.  Surrounded by obstruction you may feel tempted to blame others and respond in anger.  It is most likely that your negative thinking is the true obstruction.  Self examination is crucial right now.  Om Gam Ganapataye Namaha.',
        image: '/assets/images/39.png',
        upper: 'Water',
        lower: 'Mountain',
    },
    {
        id: 40,
        title: 'Deliverance',
        description: 'Receiving this Hexagram indicates that you are about to be delivered from danger and difficulty.  Deliverance is almost always caused by a shift in attitude and perspective.  Knowing that darkness and obstacles carry lessons for growth.',
        image: '/assets/images/40.png',
        upper: 'Thunder',
        lower: 'Water',
    },
    {
        id: 41,
        title: 'Decrease',
        description: 'The sages have described this Hexagram as a river reverting into a mountain in a time of drought.  Resources are limited.  Do not let the ego give rise to anger and frustration.  Be still, kill the ego and misfortune can still be avoided.',
        image: '/assets/images/41.png',
        upper: 'Mountain',
        lower: 'Lake',
    },
    {
        id: 42,
        title: 'Increase',
        description: 'Thunder and wind strengthen each other.  This Hexagram encourages you not to be careless or too relaxed moving forward.  Now is the time to increase conciousness.  Powerful improvements are already underway.',
        image: '/assets/images/42.png',
        upper: 'Wind',
        lower: 'Thunder',
    },
    {
        id: 43,
        title: 'Breakthrough',
        description: 'This Hexagram shows that you are on the cusp of a long awaited positive change.  Be careful not to let the ego lure you back into bad habits.  Do not rest on your laurels, keep pushing forward, success is close.',
        image: '/assets/images/43.png',
        upper: 'Lake',
        lower: 'Heaven',
    },
    {
        id: 44,
        title: 'Coming to Meet',
        description: 'Darkness reappears unexpectedly and has interrupted the flow of light.  Be careful of situations that engage the ego right now.  Specificaly be mindful of anger, self righteousness, seduction, desire and arrogance.  Stillness is encouraged.',
        image: '/assets/images/44.png',
        upper: 'Heaven',
        lower: 'Wind',
    },
    {
        id: 45,
        title: 'Gathering Together',
        description: 'This Hexagram shows that there is strength is community.  This Hexagram also encourages you to devlop your character into a leader.  Great communities often have great leaders at the center.  Lead by example.',
        image: '/assets/images/45.png',
        upper: 'Lake',
        lower: 'Earth',
    },
    {
        id: 46,
        title: 'Pushing Upward',
        description: 'You are entering a time when great progress can be made.  The elements of this Hexagram can offer some advice in the form of a Japanese proverb:  Be like bamboo, planted firmly in the earth, it bends in the wind but does not break.',
        image: '/assets/images/46.png',
        upper: 'Earth',
        lower: 'Wind',
    },
    {
        id: 47,
        title: 'Oppression',
        description: 'Exhaustion.  During times of oppression and exhaustion it often feels appropriate to fight back.  Receiving this Hexagram means that success is not possible right now.  Resisting will only compound the misfortune.  Cultivate neutrality and acceptance.  Open your mind, quiet your heart.',
        image: '/assets/images/47.png',
        upper: 'Lake',
        lower: 'Water',
    },
    {
        id: 48,
        title: 'The Well',
        description: 'Return to your wells of goodness.  The I Ching teaches that two wells are usually needed.  An external well of guidance, such as the I Ching itself, and an internal source.  Remember to utilize both.',
        image: '/assets/images/48.png',
        upper: 'Water',
        lower: 'Wind',
    },
    {
        id: 49,
        title: 'Revolution',
        description: 'A revolution is upon you.  This Hexagram does not specify if it will be an external or inner revolution but it is clear that a situation (or set of conditions) is about to give way for something more beneficial.  Please note inner revolution always comes before external.',
        image: '/assets/images/49.png',
        upper: 'Lake',
        lower: 'Fire',
    },
    {
        id: 50,
        title: 'The Cauldron',
        description: 'This hexagram assures that no matter what your goals are right now, that indulgences of the ego will be what blocks them.  The bubbling cauldron represents your mind and thoughts bubbling inside.  The only way you will be able to control them and listen to them all is with stillness and equanimity.  Kill the ego.',
        image: '/assets/images/50.png',
        upper: 'Fire',
        lower: 'Wind',
    },
    {
        id: 51,
        title: 'The Arousal',
        description: 'Shock.  Thunder over Thunder.  Lightning.  This Hexagram shows that a series of shocks are going to occur until an obstruction is removed.  (Hint: The obstruction will most likely be attitude).  Do not react to the shocks, accept them and they will subside.',
        image: '/assets/images/51.png',
        upper: 'Thunder',
        lower: 'Thunder',
    },
    {
        id: 52,
        title: 'Keeping Still',
        description: 'Mountain over mountain.  Be still, like a mountain.  This Hexagram explicitly encourages meditation to see clearly.  Not generic inner thought but seated, legs crossed, straight spine meditation.  Namaste.',
        image: '/assets/images/52.png',
        upper: 'Mountain',
        lower: 'Mountain',
    },
    {
        id: 53,
        title: 'Development',
        description: 'Gradual Progress.  The ancient sages describe this Hexagram as a tree growing high on a mountain top.  If this tree does not make sure it has strong roots before growing high the winds will rip it up.  The only lasting progres is gradual progres.  Do not let your ego make you vulnerable to negative influence or winds.',
        image: '/assets/images/53.png',
        upper: 'Wind',
        lower: 'Mountain',
    },
    {
        id: 54,
        title: 'The Marrying Maiden',
        description: 'Thunder over a lake.  This Hexagram is reminding you that relationships can throw you off balance if they are not handled properly.  Not just romantic relationships but also friends, family, work, etc.  This Hexagram is also showing that you are in danger of sacrificing your composure for a relationship.',
        image: '/assets/images/54.png',
        upper: 'Thunder',
        lower: 'Lake',
    },
    {
        id: 55,
        title: 'Abundance',
        description: 'Fullness.  This Hexagram implies that you are in an apex right now.  While receiving this Hexagram is positive, remember the only constant of the universe is impermanence.',
        image: '/assets/images/55.png',
        upper: 'Thunder',
        lower: 'Fire',
    },
    {
        id: 56,
        title: 'The Wanderer',
        description: 'A person who travels as a stranger in a strange land is wise to display an attitude free of arrogance; otherwise trouble might find him making it hard to survive.  This Hexagram reminds us that we are all strangers in a strange land.',
        image: '/assets/images/56.png',
        upper: 'Fire',
        lower: 'Mountain',
    },
    {
        id: 57,
        title: 'The Gentle',
        description: 'The ancient sages say this Hexagram represents gentle winds dispersing into storm clouds.  When wind constantly changes direction it poses no threat, even strong winds; they only do damage when they are consistantly blowing in the same direction.  Meditate on consistancy.',
        image: '/assets/images/57.png',
        upper: 'Wind',
        lower: 'Wind',
    },
    {
        id: 58,
        title: 'The Joyous',
        description: 'Joy cannot be forced or stolen.  True joy is only experienced by those who are strong within and gentle without.  Lake over lake also shows us that two lakes support each other.  Reach out to family or friends for support.',
        image: '/assets/images/58.png',
        upper: 'Lake',
        lower: 'Lake',
    },
    {
        id: 59,
        title: 'Dispresion',
        description: 'The ancient sages describe this Hexagram as warm spring wind dissolving winter ice.  You may be in a transitionary period.  Disperse hard attitudes with gentleness.  Seek refuge in music, meditation, or a common project.',
        image: '/assets/images/59.png',
        upper: 'Wind',
        lower: 'Water',
    },
    {
        id: 60,
        title: 'Limitation',
        description: 'Growth requires sacrifice and limitations.  Overambitious limits can lead to pent up energy; allow pleasure but be careful of over-indulgences.  Set some practical limits today.',
        image: '/assets/images/60.png',
        upper: 'Water',
        lower: 'Lake',
    },
    {
        id: 61,
        title: 'Inner Truth',
        description: 'This Hexagram indicates there is a difficult situation and cautions against specific feelings of the ego; self righteousness, anger, pride, arrogance and feelings of being wounded.  Anger and force will only prolong the difficult situation.',
        image: '/assets/images/61.png',
        upper: 'Wind',
        lower: 'Lake',
    },
    {
        id: 62,
        title: 'Preponderance of the Small',
        description: 'Thunder on a mountain.  In a great storm a wise bird waits patiently before returning to her nest.  It is a difficult and dangerous time. Integrity and nonaction is how you will end this difficult time.  Force and reactions in fear and anger will do nothing but make it worse.',
        image: '/assets/images/62.png',
        upper: 'Thunder',
        lower: 'Mountain',
    },
    {
        id: 63,
        title: 'After Completion',
        description: 'This Hexagram indictaes that a movement from chaos to order is complete.  Do not undo all you have built by giving way to the ego.  Water over fire boils; do not let it boil over with carelessness.',
        image: '/assets/images/63.png',
        upper: 'Water',
        lower: 'Fire',
    },
    {
        id: 64,
        title: 'Before Completion',
        description: 'The ancient sages have described this Hexagram as a sign of spring.  Darkness is giving way to light but the transition is not yet complete.  Stay humble.  Move cautiously, like a fox walking on ice.',
        image: '/assets/images/64.png',
        upper: 'Fire',
        lower: 'Water',
    },


]

export default Hex
