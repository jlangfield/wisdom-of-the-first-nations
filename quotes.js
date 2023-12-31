const localQuotes = [
  {
      text: "Níłch'i Dóó Tsékooh (Love and Harmony)",
      author: "Emphasizes the importance of cultivating love and harmony within oneself and in relationships, promoting a positive and balanced life in Navajo spirituality."
  },
  {
      text: "Ałchííní (Ant People)",
      author: "References the Ant People, significant beings in Navajo cosmology, symbolizing industriousness, cooperation, and harmony with nature."
  },
  {
      text: "Táá hwó' ají t'éego (Self-Determination)",
      author: "Encourages individuals to exercise self-determination, taking control of their destiny and making choices that align with Navajo values and principles."
  },
  {
      text: "K'éí (Home)",
      author: "Emphasizes the sacredness of the home, highlighting it as a place where Navajo cultural teachings, traditions, and values are passed down through generations."
  },
  {
      text: "Níłtsá Hááijá (Thinking with Clarity)",
      author: "Encourages clear and thoughtful decision-making, emphasizing the importance of considering the consequences of one's actions in Navajo spirituality."
  },
  {
      text: "Háájí Doo Naat'aanii (Maternal Lineage)",
      author: "Highlights the significance of the maternal lineage in Navajo culture, recognizing the role of women and the transmission of cultural knowledge through generations."
  },
  {
      text: "Hózhóogo Iina (Walking in Beauty in Life)",
      author: "Reiterates the ongoing journey of walking in beauty throughout life, promoting balance, harmony, and positive relationships within the Navajo worldview."
  },
  {
      text: "Diné Bike'éyah (Navajo Wedding)",
      author: "References the traditional Navajo wedding ceremony, emphasizing the sacred union and the importance of harmony and balance in the marital relationship."
  },
  {
      text: "T'áá hwó' ají t'éego (Self-Reliance)",
      author: "Encourages individuals to be self-reliant and resilient, taking responsibility for their actions and decisions within the Navajo cultural context."
  },
  {
      text: "Hááyoo Yee Doo Nahodałtsoh (Respecting Elders)",
      author: "Stresses the importance of respecting elders, recognizing their wisdom and the role they play in preserving and passing down Navajo cultural traditions."
  },
  {
      text: "Baa Hózhó (Long Life and Prosperity)",
      author: "Expresses the desire for long life and prosperity, highlighting the interconnectedness of health, balance, and well-being in Navajo cultural aspirations."
  },
  {
      text: "Tó éí Iina (Sacred Mountain)",
      author: "References sacred mountains in Navajo cosmology, symbolizing spiritual connection, protection, and the presence of divine beings in the landscape."
  },
  {
      text: "Hágoóneełti'i (Teaching of Respect)",
      author: "Stresses the teaching of respect, emphasizing its importance in Navajo culture and encouraging individuals to show reverence for all aspects of life."
  },
  {
      text: "Ahóóhai (Compassion)",
      author: "Emphasizes the value of compassion, encouraging individuals to show kindness and empathy to others, promoting harmonious relationships in Navajo culture."
  },
  {
      text: "Háyoołkááłti'í (Life Learning)",
      author: "Highlights the concept of life learning, recognizing that every experience and challenge provides opportunities for growth and wisdom in Navajo spirituality."
  },
  {
      text: "Shash Yázhí (Bear)",
      author: "Symbolizes strength, introspection, and healing in Navajo culture. The bear is revered for its abilities to navigate both the physical and spiritual realms."
  },
  {
      text: "Ma'ii (Coyote)",
      author: "Represents a trickster figure in Navajo mythology. The coyote is seen as both cunning and foolish, teaching valuable lessons about balance and consequences."
  },
  {
      text: "Tótsohnii (Big Horn Sheep)",
      author: "Signifies endurance, determination, and balance. The Big Horn Sheep teaches the importance of navigating life's challenges with grace and resilience."
  },
  {
      text: "Dibé (Sheep)",
      author: "Holds cultural and spiritual significance, symbolizing sustenance, warmth, and protection. Sheep are essential in Navajo ceremonies and daily life."
  },
  {
      text: "Bilasáana (Birds)",
      author: "Various birds hold symbolic meanings in Navajo culture. For example, eagles are revered for their connection to the sky and spiritual realms."
  },
  {
      text: "Tł'ééjí (Horse)",
      author: "Represents companionship, strength, and harmony. Horses are respected for their roles in Navajo history, aiding in transportation and daily life."
  },
  {
      text: "Chʼosh (Snake)",
      author: "Symbolizes transformation and healing. The shedding of its skin represents renewal and the cycles of life, death, and rebirth in Navajo spirituality."
  },
  {
      text: "Dootł'izhii (Mountain Lion)",
      author: "Signifies leadership, courage, and balance. The mountain lion is respected for its ability to navigate diverse landscapes and its connection to the spirit world."
  },
  {
      text: "Tłʼízí (Turkey)",
      author: "Carries cultural importance, symbolizing abundance and gratitude. Turkeys are often associated with ceremonies and expressions of thanksgiving."
  },
  {
      text: "Dzeh (Ant)",
      author: "Teaches lessons of industriousness, cooperation, and harmony with nature. Ants are revered for their diligence and interconnectedness."
  },
  {
      text: "Yéiitsoh (Monster Slayer)",
      author: "Legendary figure who defeated monsters threatening Navajo people. Embodies bravery, protection, and the triumph of good over evil."
  },
  {
      text: "Chʼil Hajiin (Bluebird)",
      author: "Symbolizes happiness, good fortune, and the arrival of spring. The bluebird is associated with positive omens and blessings in Navajo culture."
  },
  {
      text: "Táá hwó' ají t'éego (Self-Reliance)",
      author: "Encourages individuals to be self-reliant and resilient, learning from the independence and adaptability observed in various animals."
  },
  {
    text: "Sáanii (Ghostway Ceremony)",
    author: "Emphasizes the ceremonial practices conducted to guide the spirit of the deceased to the afterlife. Reflects the belief in the importance of maintaining harmony and balance for the soul's journey."
  },
  {
    text: "Yá'át'ééh Késhmish (Condolences)",
    author: "The expression of condolences is a crucial aspect of Navajo culture when someone passes away. Encourages community support and empathy during times of grief."
  },
  {
    text: "Tl'iish (Bitter Water)",
    author: "Refers to the bitter water ceremony, which is conducted to cleanse and purify individuals affected by death. Symbolizes the acknowledgment of the hardships associated with loss and the importance of spiritual purification."
  },
  {
    text: "Shí naashá (Mourning)",
    author: "Mourning practices are observed to honor and remember the departed. Reinforces the communal aspect of grieving, emphasizing the support provided by the community."
  },
  {
    text: "Anííní (Breath of Life)",
    author: "Signifies the belief in the continuation of life through the breath, even after physical death. Reflects the interconnectedness of all living things and the enduring nature of the spirit."
  },
  {
    text: "Chʼį́įdii (Ceremonial Blessings)",
    author: "Ceremonial blessings are often conducted to bring peace to the departed soul and comfort to the grieving community. Reinforces the spiritual connection between the living and the deceased."
  },
  {
    text: "Hałneezí (Burying the Placenta)",
    author: "In some Navajo communities, the placenta is ceremonially buried to ensure a strong spiritual connection between the individual and the land. Represents the belief in the cyclical nature of life and death."
  },
  {
    text: "Hózhóogo Iiná (Walking in Beauty in Life)",
    author: "Emphasizes the importance of leading a balanced and harmonious life, recognizing that death is a part of the natural order. Encourages individuals to live in a way that contributes to the overall beauty and harmony of existence."
  },
  {
    text: "Yikáísdáhí (Changing Woman)",
    author: "Changing Woman is a significant deity associated with the celestial realm, embodying life, fertility, and the cyclical nature of existence. The stars are seen as her children, reflecting the interconnectedness of all life."
  },
  {
    text: "Níłchʼi Diyin (Holy Wind)",
    author: "The Holy Wind is a spiritual force that can be associated with the movement of celestial bodies, including the stars. Symbolizes the presence of the divine in the natural world, connecting the earthly and celestial realms."
  },
  {
    text: "Bilasáana (Meteor Shower)",
    author: "Meteor showers are considered significant celestial events in Navajo culture. The streaking lights are often seen as messages or signs from the spiritual realm, carrying symbolic meaning."
  },
  {
    text: "Dibé Nitsaa (Pleiades)",
    author: "The Pleiades star cluster holds cultural importance and is associated with the Dibé (Sheep) ceremony. The appearance of the Pleiades in the night sky marks the beginning of the winter season and holds significance in ceremonial timing."
  },
  {
    text: "Tó éí Iina (Sacred Mountain)",
    author: "Sacred mountains are considered earthly manifestations of celestial beings and hold a spiritual connection to the stars. The alignment of sacred mountains with celestial events is seen as a reflection of the divine order."
  },
  {
    text: "Yéigo Diné (Navajo Night Chant)",
    author: "The Night Chant ceremony involves rituals conducted at night and includes chants that connect participants to celestial forces. Participants seek blessings and guidance from the stars during this ceremonial event."
  },
  {
    text: "Ałchííní (Ant People)",
    author: "The Ant People are believed to have come from the stars and played a role in guiding the Navajo people during times of hardship. Represents the idea of extraterrestrial influence in Navajo cosmology."
  },
  {
    text: "Tłéehił (Rainbow)",
    author: "While not a star, the Rainbow is seen as a celestial bridge connecting the physical and spiritual realms. Reflects the interconnectedness of the universe and the harmonious balance between different elements."
  },
  {
    text: "Táá hwó' ají t'éego (Self-Determination)",
    author: "Encourages individuals to look to the stars as guides for self-determination and personal growth. The navigation of one's path is likened to the movement of stars in the night sky."
  },
  {
    text: "Hózhó (Beauty and Harmony)",
    author: "Central to Navajo philosophy, Hózhó represents the concept of living in beauty and harmony with the world. Encourages individuals to maintain balance and order in their lives, fostering positive relationships with the natural world."
  },
  {
      text: "Tó éí Iina (Sacred Mountain)",
      author: "Sacred mountains are considered living entities with a spiritual connection to the world. Reflects the idea that the natural landscape holds profound spiritual significance for the Navajo people."
  },
  {
      text: "Diné Bike'éyah (Navajo Wedding)",
      author: "Navajo wedding ceremonies emphasize the sacred union and harmony between individuals. Acknowledges the interconnectedness of families and communities, reinforcing the importance of balance in relationships."
  },
  {
      text: "Níłch'i Diyin (Holy Wind)",
      author: "The Holy Wind is a spiritual force that permeates the world, connecting all living beings. Symbolizes the presence of the divine in the natural elements, emphasizing a spiritual connection to the Earth."
  },
  {
      text: "Ha'ashchʼééłi (Talking God)",
      author: "One of the Holy People in Navajo mythology, Talking God is associated with maintaining balance in the world. Represents the power of communication and diplomacy to resolve conflicts and restore harmony."
  },
  {
      text: "Yéigo Diné (Navajo Night Chant)",
      author: "The Night Chant ceremony seeks to restore balance and harmony to individuals and the world. Participants engage in rituals and chants to connect with spiritual forces and promote well-being."
  },
  {
      text: "Tł'éehił (Rainbow)",
      author: "The Rainbow is seen as a symbol of harmony and balance in the natural world. Reflects the interconnectedness of different elements, both in the physical and spiritual realms."
  },
  {
      text: "Chʼil Hajiin (Bluebird)",
      author: "The Bluebird is associated with happiness and positive omens, bringing blessings to the world. Represents the belief in the importance of positivity and well-being in the community."
  },
  {
      text: "Shash Yázhí (Bear)",
      author: "The Bear symbolizes strength, introspection, and healing, emphasizing the interconnectedness of all life. Teaches lessons about coexistence and the importance of respecting the natural world."
  },
  {
      text: "Níłtsą́ Nítsą́ (Seeking Balance)",
      author: "Encourages individuals to seek balance in all aspects of life, recognizing the interconnectedness of physical, mental, and spiritual well-being. Reflects the idea that balance is essential for personal and collective harmony."
  },
];