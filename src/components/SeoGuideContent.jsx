// components/SeoGuideContent.jsx
import { useState } from "react";

export default function SeoGuideContent() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-orange-600 font-semibold hover:underline underline-offset-4";
  const pClass = "text-gray-700 leading-8 mb-4";
  const titlePClass = "text-lg font-bold text-gray-900 mt-10 mb-3";

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* ✅ Title (still p as requested) */}
        <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          The Ultimate Guide to the Best Persian, Middle Eastern, and
          Mediterranean Food in Houston
        </p>

        {/* ✅ Main Box */}
        <div
          className={`relative bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-10 overflow-hidden transition-all duration-300 ${
            open ? "max-h-[999999px]" : "max-h-[520px]"
          }`}
        >
          {/* ✅ Content starts */}
          <p className={pClass}>
            Houston is one of America’s most diverse culinary destinations, a
            city where flavor, culture, and creativity meet on every corner.
            From sizzling, delicious kebabs to aromatic stews and lively weekend
            gatherings, Persian cuisine has carved a warm and special place in
            Houston’s food scene. If you are looking for the best Persian
            restaurant in Houston, the{" "}
            <a
              href="https://www.aban-restaurant.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Best Middle Eastern food in Houston
            </a>{" "}
            or the best Mediterranean cuisine in Houston, this comprehensive
            guide brings all the information together in one place.
          </p>

          <p className={pClass}>
            This article highlights the heart of Persian food in Houston,
            showcases the joy of Persian weekend parties, and even provides
            options for Persian food catering in Houston, TX. Whether you are
            searching for the{" "}
            <a
              href="https://www.aban-restaurant.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Top Middle Eastern food in Houston
            </a>
            , the best kabob in Houston, or a cozy, intimate Persian restaurant,
            this guide will walk you through all the flavors, aromas, and
            experiences that make Persian cuisine unforgettable.
          </p>

          <p className={titlePClass}>The Rise of Persian Food Culture in Houston</p>

          <p className={pClass}>
            Houston’s multicultural identity has created a vibrant home for
            international cuisines. Among them, Persian food stands out for its
            deep flavors, ancient traditions, and focus on hospitality. Over the
            years, the city has seen a growing number of diners seeking Best
            Persian Food in Houston, not just for special occasions but for
            everyday meals.
          </p>

          <p className={pClass}>
            In recent years, Persian food culture has experienced significant
            growth in Houston. Iranian restaurants and cafés not only offer
            traditional flavors but also provide a full experience of Iranian
            hospitality and culinary art for locals and tourists. In the table
            below, you can explore five key aspects of the rise of Persian food
            culture in Houston, highlighting its popularity and impact in the
            city.
          </p>

          {/* ✅ Table converted from Word */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="p-3 border border-orange-300 text-left">Num</th>
                  <th className="p-3 border border-orange-300 text-left">
                    Aspect
                  </th>
                  <th className="p-3 border border-orange-300 text-left">
                    Brief Explanation
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  [
                    "1",
                    "Growth of Iranian Restaurants",
                    "The number of Iranian restaurants in Houston has grown significantly over the past decade.",
                  ],
                  [
                    "2",
                    "Menu Diversity",
                    "Iranian menus include traditional dishes, Iranian fast food, and Iranian desserts, offering a wide range of options for customers.",
                  ],
                  [
                    "3",
                    "Persian Grocery Stores",
                    "Iranian stores and supermarkets have expanded, making access to authentic ingredients easier.",
                  ],
                  [
                    "4",
                    "Cultural Events & Festivals",
                    "Festivals and food events introduce local people to Iranian cuisine and culture.",
                  ],
                  [
                    "5",
                    "Influence of Media & Social Networks",
                    "Social media and other media outlets help introduce Iranian restaurants and recipes to a wider audience.",
                  ],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition">
                    <td className="p-3 border border-gray-200 font-semibold">
                      {row[0]}
                    </td>
                    <td className="p-3 border border-gray-200">{row[1]}</td>
                    <td className="p-3 border border-gray-200">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={pClass}>
            So, Persian cuisine in Houston brings together the culinary history
            of Iran with Texas-sized hospitality. With dishes marinated for
            hours, grilled over open flames, and paired with fresh herbs,
            saffron rice, and warm bread, Persian restaurants offer an inviting
            escape into a world of tradition and taste.
          </p>

          <p className={titlePClass}>
            Why Persian Cuisine Connects So Deeply with Houston Diners
          </p>

          <p className={pClass}>
            What makes Persian food so memorable? It’s the comforting
            combination of balance, aroma, and freshness. You’ll find
            slow-cooked stews, perfectly grilled meats, colorful rice dishes,
            and appetizers full of herbs and citrus.
          </p>

          <p className="text-gray-800 leading-8 mb-2 font-semibold">
            Houston diners love these features because:
          </p>

          {[
            "Persian flavors are bold yet comforting",
            "Portions are generous",
            "Meals are perfect for sharing",
            "Ingredients are fresh and natural",
            "Dining experiences feel like a celebration",
          ].map((item, i) => (
            <p key={i} className="text-gray-700 leading-8 mb-1">
              • {item}
            </p>
          ))}

          <p className={`${pClass} mt-4`}>
            This blend of flavor and atmosphere is exactly why those searching
            for the{" "}
            <a
              href="https://www.aban-restaurant.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Top Persian Restaurant In Houston
            </a>{" "}
            keep returning.
          </p>

          <p className={titlePClass}>
            The Essence of Middle Eastern and Mediterranean Cuisine in Houston
          </p>

          <p className={pClass}>
            When people search for Top Middle Eastern food in Houston or the Best
            Mediterranean food in Houston, they often discover that Persian
            cuisine sits beautifully at the intersection of both traditions.
          </p>

          <p className={pClass}>
            Mediterranean cuisine focuses on olive oil, fresh vegetables,
            seafood, and yogurt-based dishes. Middle Eastern food highlights
            spices, grilled meats, rich rice dishes, and warm bread.
          </p>

          <p className={pClass}>
            Persian food shares techniques and flavors with both categories while
            offering its unique identity:
          </p>

          {[
            "Saffron-infused rice",
            "Pomegranate and walnut stews",
            "Flame-grilled kabobs",
            "Fresh herb platters",
            "Traditional desserts with rosewater and pistachio",
          ].map((item, i) => (
            <p key={i} className="text-gray-700 leading-8 mb-1">
              • {item}
            </p>
          ))}

          <p className={`${pClass} mt-4`}>
            This fusion of influences creates exciting dining experiences for
            Houstonians looking for flavor with cultural depth.
          </p>

          <p className={titlePClass}>
            The Search for the Best Persian Restaurant in Houston
          </p>

          <p className={pClass}>
            When you think about the{" "}
            <a
              href="https://www.aban-restaurant.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Best Persian Restaurant in Houston
            </a>
            , you’re looking for more than just delicious food. You’re looking
            for:
          </p>

          {[
            "Authenticity",
            "Warm service",
            "Fresh ingredients",
            "A clean, inviting atmosphere",
            "Consistent quality",
            "Flavor that keeps you coming back",
          ].map((item, i) => (
            <p key={i} className="text-gray-700 leading-8 mb-1">
              • {item}
            </p>
          ))}

          <p className={`${pClass} mt-4`}>
            A great Persian restaurant makes every meal feel like a celebration.
            From the moment you're greeted to the last bite of dessert, the
            experience should feel complete.
          </p>

          <p className={titlePClass}>
            The Heartbeat of Persian Food in Houston: Kabobs
          </p>

          <p className={pClass}>
            No Persian menu is complete without kabobs. They’re the star of
            Persian cuisine and the first thing people search for when craving
            bold flavors. That's why the phrase{" "}
            <a
              href="https://www.aban-restaurant.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Best Kabob in Houston
            </a>{" "}
            shows up so often among food lovers.
          </p>

          <p className={pClass}>Types of Persian kabobs you’ll find include:</p>

          {[
            "Koobideh Kabob: seasoned ground beef or lamb, tender and juicy",
            "Barg Kabob: thin slices of filet mignon, marinated in saffron and lemon",
            "Joojeh Kabob: grilled saffron chicken, incredibly flavorful",
            "Shishlik Kabob: marinated lamb chops grilled to perfection",
            "Vaziri & Soltani: generous combinations of kabobs for true feast lovers",
          ].map((item, i) => (
            <p key={i} className="text-gray-700 leading-8 mb-1">
              • {item}
            </p>
          ))}

          <p className={`${pClass} mt-4`}>
            These dishes are why Persian cuisine has become a top choice for
            families, couples, and groups of friends across Houston.
          </p>

          <p className={titlePClass}>
            Persian Food Catering in Houston TX: A Popular Choice for Events
          </p>

          <p className={pClass}>
            When people plan gatherings, corporate events, weddings, or family
            celebrations, many choose{" "}
            <a
              href="https://www.aban-restaurant.com/catering"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Persian food catering in Houston TX
            </a>{" "}
            because it offers:
          </p>

          {[
            "Elegant presentation",
            "Flavorful meals",
            "Large portions",
            "Options for all diets (meat, vegetarian, gluten-free)",
            "Fresh ingredients and beautiful colors",
          ].map((item, i) => (
            <p key={i} className="text-gray-700 leading-8 mb-1">
              • {item}
            </p>
          ))}

          <p className={`${pClass} mt-4`}>
            Persian catering adds charm, authenticity, and warmth to any event.
            The variety of rice, grilled meats, appetizers, and desserts makes it
            a crowd-pleaser for relaxed gatherings and upscale events alike.
          </p>

          <p className={titlePClass}>
            Weekend Persian Party Restaurants in Houston
          </p>

          <p className={pClass}>
            A unique part of Houston’s Persian food scene is the growing demand
            for{" "}
            <a
              href="https://www.aban-restaurant.com/events"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Weekend Persian party restaurant Houston
            </a>{" "}
            locations, spots that offer:
          </p>

          {[
            "Live Persian music",
            "DJ nights",
            "Dance floor",
            "Special weekend menus",
            "Festive atmosphere",
            "Traditional teas, desserts, and late-night meals",
          ].map((item, i) => (
            <p key={i} className="text-gray-700 leading-8 mb-1">
              • {item}
            </p>
          ))}

          <p className={`${pClass} mt-4`}>
            These restaurants become the heartbeat of the community on weekends,
            offering a mix of food, culture, and celebration under one roof.
          </p>

          <p className={titlePClass}>
            What Makes a Persian Restaurant Stand Out in a City Like Houston?
          </p>

          <p className={pClass}>
            In a city filled with global food choices, a standout{" "}
            <a
              href="https://www.aban-restaurant.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Persian restaurant in Houston
            </a>{" "}
            must offer excellence in several areas:
          </p>

          <p className="text-gray-900 font-semibold leading-8 mb-2">
            ✔ Rich Flavor Profiles
          </p>
          <p className={pClass}>
            From saffron to pomegranate, every dish must taste balanced and
            aromatic.
          </p>

          <p className="text-gray-900 font-semibold leading-8 mb-2">
            ✔ Skilled Chefs
          </p>
          <p className={pClass}>
            Persian cooking requires deep experience, recipes are often passed
            down for generations.
          </p>

          <p className="text-gray-900 font-semibold leading-8 mb-2">
            ✔ Consistent Food Quality
          </p>
          <p className={pClass}>
            Great restaurants succeed because every plate, every time, maintains
            the same excellence.
          </p>

          <p className="text-gray-900 font-semibold leading-8 mb-2">
            ✔ Warm Hospitality
          </p>
          <p className={pClass}>
            Persian culture celebrates guests. A restaurant should make you feel
            warmly welcomed.
          </p>

          <p className="text-gray-900 font-semibold leading-8 mb-2">
            ✔ Authentic Atmosphere
          </p>
          <p className={pClass}>
            Décor, music, and presentation should reflect Persian culture
            gracefully, not excessively.
          </p>

          <p className={titlePClass}>
            A Complete Breakdown of Popular Persian Dishes in Houston
          </p>

          <p className={pClass}>
            Houston is a city that truly celebrates culinary diversity, and
            Persian cuisine has found a warm and flavorful home here. From
            traditional stews to perfectly grilled kabobs, Persian food combines
            aromatic spices, fresh herbs, and delicate cooking techniques that
            create a unique and unforgettable dining experience. If you are
            exploring the world of Persian cuisine in Houston, understanding the
            most popular dishes will enrich your journey and help you appreciate
            the depth of flavors offered in these restaurants.
          </p>

          <p className={titlePClass}>Saffron Rice (Chelow)</p>

          <p className={pClass}>
            One of the most iconic elements of Persian meals is Chelow, or
            saffron rice. This dish is characterized by its fluffy texture,
            aromatic scent, and vibrant yellow hue from premium saffron.
            Preparing the perfect Chelow requires careful rinsing, soaking, and
            steaming to achieve rice that is light yet full of flavor. Often, it
            is paired with various stews, kabobs, or simply enjoyed with a
            sprinkle of cinnamon or butter. Its simplicity and elegance make it
            a staple at any Persian dining table.
          </p>

          <p className={titlePClass}>Tahdig</p>

          <p className={pClass}>
            Perhaps the most beloved part of a Persian meal is Tahdig, the crunchy
            golden layer at the bottom of the rice pot. Tahdig can be made with
            plain rice, potatoes, or even bread, but its hallmark is a perfectly
            crisp exterior paired with a soft, flavorful interior. Creating the
            perfect Tahdig requires patience and precise heat control, making it
            a dish that reflects the care and artistry of Persian cooking. For
            many guests searching for the{" "}
            <a
              href="https://www.aban-restaurant.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Best Persian Food in Houston
            </a>
            , enjoying authentic Tahdig is not just a culinary pleasure but a
            memorable cultural experience in itself.
          </p>

          <p className={titlePClass}>Ghormeh Sabzi</p>

          <p className={pClass}>
            A true representation of Persian comfort food, Ghormeh Sabzi is a
            slow-cooked herb stew that blends fresh parsley, cilantro, fenugreek,
            and other green herbs with tender chunks of beef or lamb and kidney
            beans. Its distinct flavor comes from the harmonious balance of tangy
            dried limes and savory herbs, simmered for hours until the flavors
            are perfectly melded. Served with saffron rice, Ghormeh Sabzi is both
            hearty and aromatic, offering a taste of home in every bite.
          </p>

          <p className={titlePClass}>Fesenjan</p>

          <p className={pClass}>
            For those seeking a dish that is rich, complex, and slightly indulgent,
            Fesenjan is an absolute must-try. This luxurious stew combines ground
            walnuts and pomegranate paste, creating a sweet, tangy, and deeply
            flavorful sauce. Chicken or duck is often simmered in this sauce until
            tender, allowing the flavors to infuse fully. Fesenjan embodies Persian
            culinary sophistication, balancing sweetness, acidity, and savory notes
            to create a dish that lingers in memory long after the meal ends.
          </p>

          <p className={titlePClass}>Zereshk Polo</p>

          <p className={pClass}>
            Zereshk Polo is a visually stunning and flavorful rice dish made with
            barberries, saffron, and butter. Often paired with chicken, this dish
            offers a combination of tart and savory flavors that perfectly complement
            the aromatic saffron rice. The bright red barberries scattered over the
            golden rice make it as beautiful as it is delicious, offering a sensory
            experience that is uniquely Persian.
          </p>

          <p className={titlePClass}>Kabobs</p>

          <p className={pClass}>
            No discussion of Persian cuisine would be complete without kabobs.
            Grilled to perfection, kabobs feature tender meats, beef, lamb, or chicken,
            marinated with herbs, saffron, and sometimes yogurt to enhance tenderness
            and flavor. Served with rice, grilled vegetables, or flatbread, kabobs are
            often the centerpiece of a Persian meal. The grilling process, with subtle
            smoky undertones and perfectly balanced seasonings, ensures that each bite
            is both juicy and aromatic.
          </p>

          <p className={titlePClass}>Houston: A Haven for Persian Culinary Arts</p>

          <p className={pClass}>
            Houston’s food scene thrives on diversity, making it the ideal place for
            Persian restaurants to shine. The city has a love for bold flavors,
            generous portions, and meals that bring people together, elements that
            are central to Persian culinary culture. Whether it is a casual lunch with
            friends or a festive family gathering, the dining experience in Houston
            aligns beautifully with Persian traditions of sharing and hospitality.
          </p>

          <p className={titlePClass}>
            The Fusion of Tradition and Modern Dining in Houston
          </p>

          <p className={pClass}>
            Another key reason is Houston’s appreciation for authenticity. Persian cuisine
            is deeply rooted in history and tradition, and Houston diners respond
            enthusiastically to its rich flavors, intricate techniques, and cultural
            storytelling through food. From saffron-laden rice to slow-cooked stews and
            perfectly marinated kabobs, Persian dishes offer a sensory journey that
            celebrates both taste and tradition.
          </p>

          <p className={titlePClass}>
            Exploring Authentic Persian Flavors in the Heart of Houston
          </p>

          <p className={pClass}>
            In addition, Houston provides an excellent setting for exploring the variety
            of Persian dishes. From the comforting stews that evoke home-cooked memories
            to the vibrant, festive rice dishes and expertly grilled meats, the city’s
            culinary landscape allows each dish to shine in its full glory. The warmth
            and hospitality of Persian restaurants here ensure that every meal is not
            only a culinary delight but also a cultural experience that connects diners
            to centuries-old traditions.
          </p>

          <p className={titlePClass}>
            Hospitality and Tradition: Dining Persian Style in Houston
          </p>

          <p className={pClass}>
            For anyone eager to explore Persian cuisine, Houston offers both accessibility
            and authenticity. Whether you are trying Persian food for the first time or
            seeking the nostalgic flavors of your heritage, the city’s restaurants provide
            a complete experience. The combination of aromatic herbs, bold spices, fresh
            ingredients, and meticulous preparation ensures that each meal tells a story.
            Dining in a Persian restaurant in Houston is not just about eating, it is
            about engaging with culture, history, and the art of Persian cooking in a
            vibrant and welcoming environment.
          </p>

          <p className={titlePClass}>
            From Chelow to Kabobs: Signature Persian Dishes in Houston
          </p>

          <p className={pClass}>
            From the iconic Chelow and crispy Tahdig to rich stews like Ghormeh Sabzi and
            Fesenjan, and the perfectly grilled kabobs, each dish represents a layer of
            Persian culinary tradition. The meticulous attention to flavor balance,
            presentation, and aroma ensures that every meal is memorable. Houston’s embrace
            of diverse cuisines makes it a perfect home for these dishes, allowing diners
            to experience the full spectrum of Persian culinary artistry without leaving
            the city.
          </p>

          <p className={titlePClass}>
            A Sensory Journey Through Houston’s Persian Restaurants
          </p>

          <p className={pClass}>
            Every meal in Houston’s Persian restaurants is a celebration of flavor, aroma,
            and cultural heritage. From the tender kabobs infused with saffron to the
            comforting stews and festive rice dishes, diners are offered a full sensory
            experience that goes beyond simple dining. Each dish tells a story, connects
            guests to tradition, and highlights the skill and care involved in Persian cooking.
          </p>

          <p className={titlePClass}>Final Thoughts</p>

          <p className={pClass}>
            Persian cuisine has not only earned a place in Houston’s culinary scene, it has
            become a beloved staple. Whether you're enjoying{" "}
            <a
              href="https://www.aban-restaurant.com/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Persian food in Houston
            </a>{" "}
            for the first time or rediscovering old favorites, the flavors, aromas, and joyful
            atmosphere keep you coming back.
          </p>

          <p className={pClass}>
            From the excitement of weekend party restaurants to the elegance of catered events,
            Persian dining offers something for every occasion.
          </p>

          <p className={`${pClass} mb-0`}>
            Houston’s love for the cuisine will only continue to grow.
          </p>

          {/* ✅ Fade bottom when closed */}
          {!open && (
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
          )}
        </div>

        {/* ✅ Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#022f5e] text-white font-semibold hover:bg-[#011f40] transition"
          >
            {open ? "Show Less" : "Read Full Guide"}
          </button>
        </div>
      </div>
    </section>
  );
}
