import type { Category, CategoryGroup } from '@/data/types';

import holiWishes from '@/data/categories/holi-wishes';
import eidWishes from '@/data/categories/eid-wishes';
import newYearWishes from '@/data/categories/new-year-wishes';
import christmasWishes from '@/data/categories/christmas-wishes';
import rakshaBandhanWishes from '@/data/categories/raksha-bandhan-wishes';
import anniversaryWishes from '@/data/categories/anniversary-wishes';
import weddingWishes from '@/data/categories/wedding-wishes';
import independenceDayWishes from '@/data/categories/independence-day-wishes';
import republicDayWishes from '@/data/categories/republic-day-wishes';
import teachersDayWishes from '@/data/categories/teachers-day-wishes';

import attitudeShayari from '@/data/categories/attitude-shayari';
import goodMorningShayari from '@/data/categories/good-morning-shayari';
import goodNightShayari from '@/data/categories/good-night-shayari';
import lifeShayari from '@/data/categories/life-shayari';
import dardShayari from '@/data/categories/dard-shayari';
import brotherShayari from '@/data/categories/brother-shayari';
import sisterShayari from '@/data/categories/sister-shayari';
import motivationalShayari from '@/data/categories/motivational-shayari';
import romanticShayari from '@/data/categories/romantic-shayari';
import sadShayari from '@/data/categories/sad-shayari';

const originalCategories: Category[] = [
  {
    slug: 'diwali-wishes',
    name: 'Diwali Wishes',
    emoji: '🪔',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    language: 'Hindi & English',
    description: 'Light up the festival of lights with heartfelt Diwali wishes for your loved ones.',
    group: 'festival' as CategoryGroup,
    wishes: [
      { id: 'd1', text: 'शुभ दीपावली! इस दीवाली आपके जीवन में खुशियां, धन और समृद्धि का प्रकाश फैले। हर दीया आपके लिए नई उम्मीद जलाए।', hindi: 'शुभ दीपावली! इस दीवाली आपके जीवन में खुशियां, धन और समृद्धि का प्रकाश फैले।' },
      { id: 'd2', text: 'Happy Diwali! May this festival of lights bring endless joy, prosperity, and success to your life. Wishing you and your family a bright and beautiful Diwali!', hindi: 'हैप्पी दीपावली! इस प्रकाश के त्योहार पर आपके जीवन में असीम खुशी, समृद्धि और सफलता आए।' },
      { id: 'd3', text: 'दीपावली की रौशनी आपके जीवन के हर कोने में खुशियां लाए। मां लक्ष्मी आपके घर में विराजमान हों और आपको सबसे ज्यादा खुशियां दें। शुभ दीपावली!', hindi: 'दीपावली की रौशनी आपके जीवन के हर कोने में खुशियां लाए। मां लक्ष्मी आपके घर में विराजमान हों।' },
      { id: 'd4', text: 'May the divine light of Diwali spread into your life with peace, prosperity, happiness, and good health. Happy Diwali to you and your family!', hindi: 'दीपावली का दिव्य प्रकाश आपके जीवन में शांति, समृद्धि, खुशी और अच्छे स्वास्थ्य के साथ फैले।' },
      { id: 'd5', text: 'फुलझड़ियों की चमक, मिठाइयों की महक, दीयों की रौशनी, आपके जीवन में लाए खुशियों की बहार। आपको और आपके परिवार को हार्दिक शुभ दीपावली!', hindi: 'फुलझड़ियों की चमक, मिठाइयों की महक, दीयों की रौशनी, आपके जीवन में लाए खुशियों की बहार।' },
      { id: 'd6', text: 'Wishing you a Diwali that brings happiness, prosperity, and joy to your life. May this festival of lights illuminate your home and heart with everlasting glow!', hindi: 'आपको एक ऐसी दीपावली की शुभकामना जो आपके जीवन में खुशी, समृद्धि और आनंद लाए।' },
      { id: 'd7', text: 'दीपों की रौशनी से आपका जीवन रौशन हो, रिश्ते और मजबूत हों, खुशियां आपके कदम चूमें। आपको और आपके परिवार को दीपावली की ढेर सारी शुभकामनाएं!', hindi: 'दीपों की रौशनी से आपका जीवन रौशन हो, रिश्ते और मजबूत हों, खुशियां आपके कदम चूमें।' },
      { id: 'd8', text: 'This Diwali, may you be blessed with good fortune, wealth, and prosperity. May the festival of lights brighten up your life with endless happiness. Happy Diwali!', hindi: 'इस दीपावली, आपको भाग्य, धन और समृद्धि का आशीर्वाद मिले। उत्सव के रंग आपके जीवन को रौशन करें।' },
      { id: 'd9', text: 'राम घर आए, खुशियां छाए, दीप जलें सब घर में, हर पल हो उत्सव अपने जीवन में। शुभ दीपावली आपको और आपके परिवार को!', hindi: 'राम घर आए, खुशियां छाए, दीप जलें सब घर में, हर पल हो उत्सव अपने जीवन में।' },
      { id: 'd10', text: 'May the glow of diyas illuminate your life with happiness, prosperity, and success. Let every diya you light bring a new ray of hope. Happy Diwali!', hindi: 'दीयों की रौशनी आपके जीवन को खुशी, समृद्धि और सफलता से भर दे। हर दीया एक नई उम्मीद लाए।' },
      { id: 'd11', text: 'दीवाली की रौशनी आपके चेहरे पर मुस्कान लाए, हर दीया आपके लिए एक नई शुरुआत बने। देश और दुनिया में शांति फैले, यही दीपावली की दावत है। शुभ दीपावली!', hindi: 'दीवाली की रौशनी आपके चेहरे पर मुस्कान लाए, हर दीया आपके लिए एक नई शुरुआत बने।' },
      { id: 'd12', text: 'On this auspicious festival of lights, may the glow of joy, prosperity, and happiness illuminate your life and your home. Wishing you a very Happy Diwali!', hindi: 'इस शुभ पर्व पर, खुशी, समृद्धि और आनंद का प्रकाश आपके जीवन और आपके घर को रौशन करे।' },
      { id: 'd13', text: 'मिठास हो तारों में, रौशनी हो चांद में, खुशियां हो आपकी ज़िंदगी में, यही दुआ है भगवान से, शुभ दीपावली आपको!', hindi: 'मिठास हो तारों में, रौशनी हो चांद में, खुशियां हो आपकी ज़िंदगी में, यही दुआ है भगवान से।' },
      { id: 'd14', text: 'Let this Diwali burn all your worries, tensions, and problems, and bring you happiness, peace, and love. Happy Diwali to you and your loved ones!', hindi: 'यह दीपावली आपकी सारी चिंताओं को जलाकर खुशी, शांति और प्रेम लाए। आपको और आपके प्रियजनों को शुभ दीपावली!' },
      { id: 'd15', text: 'दीयों की लौ और पटाखों की रौशनी से आपका जीवन रौशन हो। लक्ष्मी जी का आशीर्वाद आपके घर में हो। ढेरों खुशियां और प्यार आपके जीवन में हो। शुभ दीपावली!', hindi: 'दीयों की लौ और पटाखों की रौशनी से आपका जीवन रौशन हो। लक्ष्मी जी का आशीर्वाद आपके घर में हो।' },
      { id: 'd16', text: 'May the sweetness of festivity, the beauty of rangoli, and the warmth of diyas fill your home with happiness and joy. Have a wonderful and prosperous Diwali!', hindi: 'उत्सव की मिठास, रंगोली की सुंदरता और दीयों की गर्माहट आपके घर को खुशी और आनंद से भर दें।' },
      { id: 'd17', text: 'इस दीपावली से आपके जीवन के सभी अंधेरे दूर हों और हर सपना साकार हो। आपके घर में धन, धान्य और सुख की वर्षा हो। हार्दिक शुभ दीपावली!', hindi: 'इस दीपावली से आपके जीवन के सभी अंधेरे दूर हों और हर सपना साकार हो। आपके घर में धन, धान्य और सुख की वर्षा हो।' },
      { id: 'd18', text: 'May Lord Ganesha bless you with wisdom, Goddess Lakshmi bless you with wealth, and Lord Rama bless you with strength and courage. Happy Diwali!', hindi: 'भगवान गणेश आपको ज्ञान, माता लक्ष्मी आपको धन, और भगवान राम आपको बल और साहस से आशीर्वाद दें।' },
      { id: 'd19', text: 'हर दीया जलाए एक नई खुशी, हर पटाखा फोड़े आपकी परेशानी, हर मिठाई लाए एक नई महक, यही है दीपावली का असली रंग। आपको शुभ दीपावली!', hindi: 'हर दीया जलाए एक नई खुशी, हर पटाखा फोड़े आपकी परेशानी, हर मिठाई लाए एक नई महक।' },
      { id: 'd20', text: 'Wishing that this Diwali brings prosperity, good luck, and happiness in your life. May the festival of lights be the brightest one ever for you and your family!', hindi: 'यह दीपावली आपके जीवन में समृद्धि, भाग्य और खुशी लाए। उत्सव का प्रकाश आपके और आपके परिवार के लिए सबसे रौशन हो।' },
    ],
  },
  {
    slug: 'birthday-wishes',
    name: 'Birthday Wishes',
    emoji: '🎂',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    language: 'Hindi & English',
    description: 'Make every birthday special with heartfelt wishes that show how much you care.',
    group: 'festival' as CategoryGroup,
    wishes: [
      { id: 'b1', text: 'जन्मदिन मुबारक हो! भगवान आपको दे ढेर सारी खुशियां, सफलता और सेहत। आपका हर सपना पूरा हो और जीवन हर पल खुशियों से भरा हो।', hindi: 'जन्मदिन मुबारक हो! भगवान आपको दे ढेर सारी खुशियां, सफलता और सेहत।' },
      { id: 'b2', text: 'Happy Birthday! May this special day bring you endless joy, wonderful memories, and all the success you deserve. Wishing you a fantastic year ahead!', hindi: 'जन्मदिन मुबारक हो! यह खास दिन आपके लिए असीम खुशी और सफलता लाए।' },
      { id: 'b3', text: 'आपका जन्मदिन आपके जीवन में नई खुशियों, नए सपनों और नई उम्मीदों की शुरुआत हो। माया करोड़ों में, खुशियां अरबों में मिलें आपको। जन्मदिन मुबारक!', hindi: 'आपका जन्मदिन आपके जीवन में नई खुशियों, नए सपनों और नई उम्मीदों की शुरुआत हो।' },
      { id: 'b4', text: 'On your birthday, I wish you abundance of happiness, love, and everything your heart desires. May this year be your best one yet. Happy Birthday!', hindi: 'आपके जन्मदिन पर, मैं आपको खुशी, प्रेम और वह सब चाहता हूं जो आपका दिल चाहता है।' },
      { id: 'b5', text: 'सालगिरह की ढेर सारी शुभकामनाएं! आपका यह नया साल आपको लाए नई ऊंचाइयां, नए अनुभव और बेहतरीन पल। ईश्वर आपको दे सुख और समृद्धि। जन्मदिन मुबारक!', hindi: 'सालगिरह की ढेर सारी शुभकामनाएं! आपका यह नया साल आपको लाए नई ऊंचाइयां और बेहतरीन पल।' },
      { id: 'b6', text: 'Wishing you a day filled with laughter, a year filled with joy, and a life filled with blessings. Happy Birthday to someone truly special!', hindi: 'आपको एक ऐसे दिन की शुभकामना जो हंसी से भरा हो, ऐसा साल जो खुशियों से भरा हो, और ऐसा जीवन जो आशीर्वादों से भरा हो।' },
      { id: 'b7', text: 'जन्मदिन की बहार आपके जीवन में खुशियां लाए, आपके हर कदम में सफलता हो, आपके चेहरे पर हमेशा मुस्कान हो। आपको जन्मदिन मुबारक हो दोस्त!', hindi: 'जन्मदिन की बहार आपके जीवन में खुशियां लाए, आपके हर कदम में सफलता हो, आपके चेहरे पर हमेशा मुस्कान हो।' },
      { id: 'b8', text: 'Another year older, another year wiser! May your birthday be as amazing as you are. Here is to a fantastic birthday and an even better year ahead!', hindi: 'एक और साल बड़े, एक और साल समझदार! आपका जन्मदिन आपकी तरह ही शानदार हो।' },
      { id: 'b9', text: 'इस खास दिन पर मेरी दुआ है कि आपकी हर मुराद पूरी हो, आपके चेहरे की नूर कभी कम न हो, और आपकी ज़िंदगी में हमेशा खुशियां ही खुशियां हों। जन्मदिन मुबारक!', hindi: 'इस खास दिन पर मेरी दुआ है कि आपकी हर मुराद पूरी हो, आपके चेहरे की नूर कभी कम न हो।' },
      { id: 'b10', text: 'May your birthday mark the beginning of a wonderful journey filled with success, love, and prosperity. Happy Birthday! Enjoy your special day to the fullest!', hindi: 'आपका जन्मदिन सफलता, प्रेम और समृद्धि से भरी एक शानदार यात्रा की शुरुआत हो।' },
      { id: 'b11', text: 'जन्मदिन की ढेरों शुभकामनाएं! ईश्वर करे आपके जीवन का हर पल खुशनुमा हो, हर दिन नई चमक लाए, और हर साल आपको और बेहतर बनाए। हैप्पी बर्थडे!', hindi: 'जन्मदिन की ढेरों शुभकामनाएं! ईश्वर करे आपके जीवन का हर पल खुशनुमा हो, हर दिन नई चमक लाए।' },
      { id: 'b12', text: 'Happy Birthday! Today is your day, so celebrate it like never before. May your life be filled with beautiful moments and wonderful memories. Cheers to you!', hindi: 'जन्मदिन मुबारक! आज आपका दिन है, इसे कभी न मनाई गई तरह से मनाएं। आपका जीवन सुंदर पलों से भरा रहे।' },
      { id: 'b13', text: 'आपके जन्मदिन पर मेरी शुभकामनाएं आपके साथ। भगवान आपको दे लंबी उम्र, बेहतरीन सेहत और ढेरों खुशियां। आपका यह साल सबसे यादगार बने। जन्मदिन मुबारक!', hindi: 'आपके जन्मदिन पर मेरी शुभकामनाएं आपके साथ। भगवान आपको दे लंबी उम्र, बेहतरीन सेहत और ढेरों खुशियां।' },
      { id: 'b14', text: 'Wishing you a birthday that is as wonderful and unique as you are! May all your dreams come true and your life be filled with happiness. Happy Birthday!', hindi: 'आपको एक ऐसा जन्मदिन शुभकामना जो आपकी तरह ही अद्भुत और अनोखा हो! आपके सभी सपने साकार हों।' },
      { id: 'b15', text: 'जीवन का हर साल एक नया अध्याय है, और आज आपका नया अध्याय शुरू हो रहा है। इस अध्याय में खुशियां, सफलता और प्यार भरा हो। आपको हार्दिक जन्मदिन मुबारक!', hindi: 'जीवन का हर साल एक नया अध्याय है, और आज आपका नया अध्याय शुरू हो रहा है।' },
      { id: 'b16', text: 'May this birthday bring you closer to your dreams and fill your heart with joy. You deserve all the happiness in the world. Have a truly Happy Birthday!', hindi: 'यह जन्मदिन आपको आपके सपनों के करीब लाए और आपके दिल को खुशी से भर दे। आप दुनिया की सारी खुशी के हकदार हैं।' },
      { id: 'b17', text: 'आज का दिन आपके लिए है, आपकी खुशियों के लिए है। इस दिन को ढेरों मीठी यादें बनाकर मनाएं। ईश्वर आपको दे जीवन भर सुख और समृद्धि। जन्मदिन मुबारक हो!', hindi: 'आज का दिन आपके लिए है, आपकी खुशियों के लिए है। इस दिन को ढेरों मीठी यादें बनाकर मनाएं।' },
      { id: 'b18', text: 'Sending you warm birthday wishes filled with love and happiness! May your special day be memorable and your year be prosperous. Happy Birthday!', hindi: 'प्रेम और खुशी से भरी जन्मदिन की ढेर सारी शुभकामनाएं! आपका खास दिन यादगार हो।' },
      { id: 'b19', text: 'आपके आने से यह दुनिया और खूबसूरत हो गई। आज उसी दिन की खुशी मनाते हैं जब आप इस दुनिया में आए थे। जन्मदिन मुबारक, चेहरे पर हमेशा मुस्कान रहे!', hindi: 'आपके आने से यह दुनिया और खूबसूरत हो गई। आज उसी दिन की खुशी मनाते हैं जब आप इस दुनिया में आए थे।' },
      { id: 'b20', text: 'Happy Birthday to someone who makes the world a brighter place! May your day be as wonderful as you are, and may all your wishes come true this year!', hindi: 'उस किसी को जन्मदिन मुबारक जो दुनिया को रौशन बनाता है! आपका दिन आपकी तरह शानदार हो।' },
    ],
  },
  {
    slug: 'love-shayari',
    name: 'Love Shayari',
    emoji: '❤️',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    language: 'Hindi & English',
    description: 'Express your deepest emotions with beautiful love shayari that touches the heart.',
    group: 'shayari' as CategoryGroup,
    wishes: [
      { id: 'l1', text: 'तेरी आँखों की ये खामोशी, बेहद शानदार है तेरी ये आदत, हमें प्यार करने का तरीका आता नहीं, लेकिन तुझसे प्यार करने की आदत है।', hindi: 'तेरी आँखों की ये खामोशी, बेहद शानदार है तेरी ये आदत, हमें प्यार करने का तरीका आता नहीं, लेकिन तुझसे प्यार करने की आदत है।' },
      { id: 'l2', text: 'In your smile, I see something more beautiful than the stars. In your eyes, I see a world I never want to leave. You are my forever and always, my love.', hindi: 'तुम्हारी मुस्कान में तारों से भी खूबसूरत कुछ है। तुम्हारी आँखों में एक दुनिया है जिसे मैं कभी न छोड़ूं।' },
      { id: 'l3', text: 'दिल तो एक है, धड़कन भी एक है, फिर क्यों दिल में बसती हो तू, तेरे बिना ये दिल अधूरा है, जैसे फूल बिना खुशबू के, तू ही मेरी दुनिया, तू ही मेरा जहां।', hindi: 'दिल तो एक है, धड़कन भी एक है, फिर क्यों दिल में बसती हो तू, तेरे बिना ये दिल अधूरा है।' },
      { id: 'l4', text: 'Every moment with you feels like a dream I never want to wake up from. You are the reason my heart beats, the reason my world is so beautiful. I love you!', hindi: 'तुम्हारे साथ हर पल एक सपना लगता है जिससे मैं कभी न जागूं। तुम ही मेरे दिल की धड़कन हो।' },
      { id: 'l5', text: 'तेरे बिना जीने की आदत नहीं है मुझे, तेरे बिना अधूरा हर लम्हा है, तू ही मेरी जान, तू ही मेरी पहचान, तेरे बिना कुछ भी मेरा अधूरा है।', hindi: 'तेरे बिना जीने की आदत नहीं है मुझे, तेरे बिना अधूरा हर लम्हा है, तू ही मेरी जान।' },
      { id: 'l6', text: 'You are the first thought in my mind when I wake up, and the last before I sleep. You are the music my heart dances to. I love you more than words can say.', hindi: 'तुम मेरे जागने पर पहली सोच हो, और सोने से पहले आखिरी। तुम मेरे दिल की धड़कन हो, तुम मेरी संगीत हो।' },
      { id: 'l7', text: 'तेरी यादों में खोया रहता हूं, तेरे ख्यालों में जिया करता हूं, तेरे बिना ये जीवन व्यर्थ है, क्योंकि तू ही मेरा जीवन, तू ही मेरी प्राण है।', hindi: 'तेरी यादों में खोया रहता हूं, तेरे ख्यालों में जिया करता हूं, तेरे बिना ये जीवन व्यर्थ है।' },
      { id: 'l8', text: 'In a world full of temporary things, you are a perpetual feeling. My love for you grows stronger with every passing day. You are my forever, my always.', hindi: 'एक ऐसी दुनिया में जहां सब कुछ अस्थायी है, तुम एक स्थायी एहसास हो। मेरा प्यार रोज बढ़ता है।' },
      { id: 'l9', text: 'तुझसे दिल लगाकर तो देख ले, औकात मेरी तू पहचान ले, तेरे लिए जान भी दे दूंगा, बस एक बार हां कह दे, तेरे बिना अधूरा है मेरा जीवन।', hindi: 'तुझसे दिल लगाकर तो देख ले, औकात मेरी तू पहचान ले, तेरे लिए जान भी दे दूंगा, बस एक बार हां कह दे।' },
      { id: 'l10', text: 'Your love is the melody that plays in my heart, the poem my soul recites, the dream my eyes see. You are my everything, my love, my life, my world.', hindi: 'तुम्हारा प्यार वह संगीत है जो मेरे दिल में बजता है, वह कविता जो मेरी आत्मा पढ़ती है।' },
      { id: 'l11', text: 'तेरे प्यार में खो गया हूं ऐसे, कि खुद को पहचान नहीं पाता, तेरी एक झलक पाने को बेताब हूं, तेरे बिना ये जीवन मुझे न भाता।', hindi: 'तेरे प्यार में खो गया हूं ऐसे, कि खुद को पहचान नहीं पाता, तेरी एक झलक पाने को बेताब हूं।' },
      { id: 'l12', text: 'Distance means so little when someone means so much. Though we are apart, you are always in my heart. I love you today, tomorrow, and forever, my dear.', hindi: 'जिसका महत्व बहुत हो उससे दूरी बहुत कम मायने रखती है। हम दूर हों, तुम मेरे दिल में हमेशा हो।' },
      { id: 'l13', text: 'तेरे चेहरे की वो नूरानी रौशनी, दिल को सुकून देती है, तेरी मुस्कान की वो मिठास, जीवन को खूबसूरत बनाती है, तू ही मेरी प्यास, तू ही मेरी तृप्ति।', hindi: 'तेरे चेहरे की वो नूरानी रौशनी, दिल को सुकून देती है, तेरी मुस्कान की वो मिठास, जीवन को खूबसूरत बनाती है।' },
      { id: 'l14', text: 'You are the most beautiful thing I keep inside my heart. Every day with you is a gift, and every moment is a treasure. I love you more than life itself.', hindi: 'तुम सबसे खूबसूरत चीज़ हो जिसे मैं अपने दिल में रखता हूं। तुम्हारे साथ हर दिन एक तोहफा है।' },
      { id: 'l15', text: 'तुझे पाने की ख्वाहिश रखता हूं, तुझे खोने का डर नहीं रखता, तेरे प्यार में इतना डूबा हूं, कि खुद का ख्याल भी नहीं रखता, तू ही मेरी दुनिया।', hindi: 'तुझे पाने की ख्वाहिश रखता हूं, तुझे खोने का डर नहीं रखता, तेरे प्यार में इतना डूबा हूं।' },
      { id: 'l16', text: 'My heart beats only for you. My eyes see only you. My soul belongs to you. You are the one I have waited for my entire life. I love you beyond words.', hindi: 'मेरा दिल सिर्फ तुम्हारे लिए धड़कता है। मेरी आँखें सिर्फ तुम्हें देखती हैं। मेरी आत्मा तुम्हारी है।' },
      { id: 'l17', text: 'ज़िंदगी की हर खुशी तुझसे है, ज़िंदगी का हर सुकून तेरे साथ है, तू ही मेरी ख्वाहिश, तू ही मेरा सपना, तेरे बिना ये ज़िंदगी अधूरी है।', hindi: 'ज़िंदगी की हर खुशी तुझसे है, ज़िंदगी का हर सुकून तेरे साथ है, तू ही मेरी ख्वाहिश।' },
      { id: 'l18', text: 'When I say I love you, I do not say it out of habit. I say it to remind you that you are the best thing that has ever happened to me. You are my everything.', hindi: 'जब मैं कहता हूं कि मैं तुमसे प्यार करता हूं, तो यह आदत नहीं है। यह याद दिलाना है कि तुम मेरे लिए सबसे अच्छी चीज़ हो।' },
      { id: 'l19', text: 'तेरी यादों के बिना रातें अधूरी हैं, तेरे ख्यालों के बिना दिन व्यर्थ हैं, तू ही मेरे जीवन का असली रंग है, तेरे बिना ये दुनिया फीकी है।', hindi: 'तेरी यादों के बिना रातें अधूरी हैं, तेरे ख्यालों के बिना दिन व्यर्थ हैं, तू ही मेरे जीवन का असली रंग है।' },
      { id: 'l20', text: 'You are my sunrise and my sunset, my today and my tomorrow, my forever and my always. In a world of change, you are my constant. I love you endlessly.', hindi: 'तुम मेरी सुबह हो, मेरी शाम हो, मेरा आज और कल हो। बदलाव की दुनिया में तुम मेरी निरंतरता हो।' },
    ],
  },
  {
    slug: 'friendship-shayari',
    name: 'Friendship Shayari',
    emoji: '🤝',
    gradient: 'from-sky-500 via-blue-500 to-indigo-500',
    language: 'Hindi & English',
    description: 'Celebrate the bond of friendship with touching shayari for your closest friends.',
    group: 'shayari' as CategoryGroup,
    wishes: [
      { id: 'f1', text: 'दोस्ती वो रिश्ता नहीं जो दिल से जुड़े, दोस्ती वो रिश्ता है जो रूह से जुड़े, सच्चा दोस्त वो नहीं जो हंसी में साथ हो, सच्चा दोस्त वो है जो गम में साथ हो।', hindi: 'दोस्ती वो रिश्ता नहीं जो दिल से जुड़े, दोस्ती वो रिश्ता है जो रूह से जुड़े, सच्चा दोस्त वो नहीं जो हंसी में साथ हो।' },
      { id: 'f2', text: 'A true friend is someone who knows your past, believes in your future, and accepts you just the way you are. Friendship is the most beautiful bond in the world.', hindi: 'सच्चा दोस्त वो होता है जो आपके बीते को जानता हो, आपके भविष्य पर विश्वास करता हो। दोस्ती सबसे खूबसूरत रिश्ता है।' },
      { id: 'f3', text: 'दोस्त वो नहीं जो हर पल साथ रहे, दोस्त वो है जो दूर रहकर भी दिल में बसे, फासले रिश्तों को नहीं तोड़ते, बल्कि सच्ची दोस्ती को और मजबूत करते हैं।', hindi: 'दोस्त वो नहीं जो हर पल साथ रहे, दोस्त वो है जो दूर रहकर भी दिल में बसे, फासले रिश्तों को नहीं तोड़ते।' },
      { id: 'f4', text: 'Friends are the family we choose for ourselves. They make us laugh when we want to cry, and stand by us when the rest of the world walks away. True friends are priceless!', hindi: 'दोस्त वह परिवार है जिसे हम खुद चुनते हैं। वे हमें हंसाते हैं जब हम रोना चाहते हैं, और साथ खड़े रहते हैं जब बाकी दुनिया चली जाती है।' },
      { id: 'f5', text: 'सच्ची दोस्ती वो नहीं जो हर बात पर हां कहे, सच्ची दोस्ती वो है जो गलत बात पर ना कहे, दोस्त वो नहीं जो आपकी हर बात माने, दोस्त वो है जो आपकी भलाई सोचे।', hindi: 'सच्ची दोस्ती वो नहीं जो हर बात पर हां कहे, सच्ची दोस्ती वो है जो गलत बात पर ना कहे।' },
      { id: 'f6', text: 'Good friends are like stars. You do not always see them, but you know they are always there. Thank you for being my shining star through every phase of life!', hindi: 'अच्छे दोस्त तारों की तरह होते हैं। हमेशा दिखते नहीं, पर हमेशा साथ होते हैं। हर पल मेरे साथ रहने के लिए धन्यवाद!' },
      { id: 'f7', text: 'दोस्ती का हर लम्हा यादगार होता है, दोस्त की हर बात दिल में बसती है, दोस्ती वो रिश्ता है जो ज़िंदगी भर साथ रहता है, चाहे फिर कितने भी फासले हों।', hindi: 'दोस्ती का हर लम्हा यादगार होता है, दोस्त की हर बात दिल में बसती है, दोस्ती वो रिश्ता है जो ज़िंदगी भर साथ रहता है।' },
      { id: 'f8', text: 'Friendship is not about whom you have known the longest. It is about who walked into your life and said I am here for you and proved it. You are that friend to me!', hindi: 'दोस्ती इस बात पर नहीं कि आप किसे सबसे ज्यादा समय से जानते हैं। यह इस बात पर है कि कौन आपके जीवन में आया और कहा मैं तुम्हारे साथ हूं।' },
      { id: 'f9', text: 'हमारी दोस्ती इतनी प्यारी है, दिल में बसती है, ना किसी से डरते हैं, ना किसी से हारते हैं, बस एक दूसरे के साथ चलते हैं, यही है हमारी सच्ची दोस्ती।', hindi: 'हमारी दोस्ती इतनी प्यारी है, दिल में बसती है, ना किसी से डरते हैं, ना किसी से हारते हैं।' },
      { id: 'f10', text: 'A friend is one who believes in you when you have ceased to believe in yourself. Thank you for always being my strength, my support, and my biggest cheerleader!', hindi: 'दोस्त वो होता है जो आप पर विश्वास करता है जब आपने खुद पर विश्वास करना बंद कर दिया। मेरी ताकत बनने के लिए धन्यवाद!' },
      { id: 'f11', text: 'दोस्ती के आगे हर रिश्ता छोटा है, दोस्त का दिल सबसे बड़ा है, दोस्ती वो नहीं जो दिखावे से निभे, दोस्ती वो है जो दिल से निभे।', hindi: 'दोस्ती के आगे हर रिश्ता छोटा है, दोस्त का दिल सबसे बड़ा है, दोस्ती वो नहीं जो दिखावे से निभे।' },
      { id: 'f12', text: 'True friendship is seen in the smallest things, a text to check in, a call to say hi, a shoulder to cry on. You are the friend everyone wishes they had. I am lucky!', hindi: 'सच्ची दोस्ती छोटी चीज़ों में दिखती है, पूछने का एक मैसेज, हां कहने का एक फोन, रोने के लिए कंधा। आप वो दोस्त हैं जो सब चाहते हैं।' },
      { id: 'f13', text: 'ज़िंदगी में दोस्त वो नहीं जो साथ चले, दोस्त वो है जो गिरने पर थामे, जो हर मुश्किल में साथ खड़ा रहे, जो आपकी खुशी में आपसे ज्यादा खुश हो।', hindi: 'ज़िंदगी में दोस्त वो नहीं जो साथ चले, दोस्त वो है जो गिरने पर थामे, जो हर मुश्किल में साथ खड़ा रहे।' },
      { id: 'f14', text: 'Friends come and go, but true friends leave footprints in your heart. You have left the deepest and most beautiful footprints in mine. Thank you for being my friend!', hindi: 'दोस्त आते जाते हैं, पर सच्चे दोस्त आपके दिल में अपने पदचिह्न छोड़ते हैं। आपने मेरे दिल में सबसे गहरे निशान छोड़े हैं।' },
      { id: 'f15', text: 'दोस्ती एक ऐसा फूल है जो बगीचे में नहीं, दिल में खिलता है, इसकी खुशबू ज़िंदगी भर रहती है, और इसके पत्ते कभी मुरझाते नहीं, सच्ची दोस्ती हमेशा हरी रहती है।', hindi: 'दोस्ती एक ऐसा फूल है जो बगीचे में नहीं, दिल में खिलता है, इसकी खुशबू ज़िंदगी भर रहती है।' },
      { id: 'f16', text: 'In the cookie of life, friends are the chocolate chips. You make my life sweeter, brighter, and so much more fun. Thank you for being the best friend anyone could ask for!', hindi: 'जीवन की कुकी में, दोस्त चॉकलेट चिप्स हैं। आप मेरे जीवन को मीठा, रौशन और मजेदार बनाते हैं।' },
      { id: 'f17', text: 'दोस्ती वो रिश्ता है जिसमें ना कोई शर्त होती है, ना कोई लालच, बस प्यार होता है, भरोसा होता है, और एक ऐसा बंधन जो ज़िंदगी भर नहीं टूटता।', hindi: 'दोस्ती वो रिश्ता है जिसमें ना कोई शर्त होती है, ना कोई लालच, बस प्यार होता है, भरोसा होता है।' },
      { id: 'f18', text: 'Walking with a friend in the dark is better than walking alone in the light. You have been my light in every dark moment. Thank you for being my truest friend!', hindi: 'अंधेरे में दोस्त के साथ चलना रौशनी में अकेले चलने से बेहतर है। हर अंधेरे में तुम मेरी रौशनी रहे।' },
      { id: 'f19', text: 'सच्चा दोस्त वो है जो आपकी गलतियां आपको बताए, आपकी अच्छाई दुनिया को बताए, आपके साथ हंसे, आपके साथ रोए, और ज़िंदगी भर आपके साथ चले।', hindi: 'सच्चा दोस्त वो है जो आपकी गलतियां आपको बताए, आपकी अच्छाई दुनिया को बताए, आपके साथ हंसे।' },
      { id: 'f20', text: 'A best friend is someone who makes your problems their problems so you do not have to face them alone. You have always been that friend. Here is to our lifelong friendship!', hindi: 'सबसे अच्छा दोस्त वो होता है जो आपकी परेशानियां अपनी बनाता है ताकि आप अकेले न सहें। आप हमेशा वो दोस्त रहे।' },
    ],
  },
];

export const categories: Category[] = [
  ...originalCategories,
  holiWishes,
  eidWishes,
  newYearWishes,
  christmasWishes,
  rakshaBandhanWishes,
  anniversaryWishes,
  weddingWishes,
  independenceDayWishes,
  republicDayWishes,
  teachersDayWishes,
  attitudeShayari,
  goodMorningShayari,
  goodNightShayari,
  lifeShayari,
  dardShayari,
  brotherShayari,
  sisterShayari,
  motivationalShayari,
  romanticShayari,
  sadShayari,
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const festivalCategories = categories.filter((c) => c.group === 'festival');

export const shayariCategories = categories.filter((c) => c.group === 'shayari');
