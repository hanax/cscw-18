const locationIntro = {
  items: [
    {
      title: "Location Overview",
      content: `

CSCW 2018 will take place at the **Hyatt Regency Jersey City on the Hudson** located in Jersey City, New Jersey, minutes away from Manhattan via train or ferry. With its waterfront location, the venue has easy access to attractions, dining, and entertainment in New York City.

Lovingly nicknamed the Big Apple, New York is home to some of the most driven, creative, adaptive, and passionate people in the world. There is always something going on and always somewhere to go! New York City is conveniently surrounded by 3 international airports (Newark is recommended for this venue) and connected by multiple train, ferry, and subway systems. It’s no wonder that despite being the most densely populated city in the US, residents and visitors frequently mention feeling connected to the city and the neighborhoods they explore!

Three of the world's 10 most-visited tourist attractions can be found in Manhattan (Times Square, Central Park, and Grand Central Terminal) along with many world-renowned bridges, such as the Brooklyn Bridge, skyscrapers (such as the Empire State Building), and parks (such as Central Park). In addition to the sites in Manhattan, NYC’s boroughs also have plenty of their own. Brooklyn is home to the well-known Coney Island, famous for its freak shows and rickety old roller coaster. Queens is home of the Queens Botanical Garden and Jamaica Bay Wildlife Refuge.  And for baseball fans, the Bronx, home of the New York Yankees, is well worth the trip.  Last, but not least, the Staten Island ferry will take you not only from Manhattan to Staten Island, but will also boast some lovely views in the process. 

Something that often surprises visitors is how adaptive NYC really is. It’s not unusual to see startup companies rent space in repurposed laundromats, or teams holding stand up meetings in the corner of coffee shops. That adaptive nature can be found in every corner of the city-whether it’s pop-up restaurants that open and close in an afternoon for a one time only affair, or a seedling garden that has been anonymously planted and maintained in the corner of Bryant Park. Local action makes this big city feel small.

As Frank Sinatra sang, “If you can make in New York, you can make it anywhere.” But any New Yorker will tell you, “If you can make it in New York, why would you want to make it anywhere else?”

## Access to NYC

The Hyatt Regency is a short walk to the **Exchange Place PATH Station** with [frequent trains](http://www.panynj.gov/path/maps-schedules.html) running directly across the Hudson to the World Trade Center site. The PATH also runs further north in Manhattan which makes connecting to the MTA subway trains like the 4,5,6 and A, C, E quite effortless. The nearby ferry terminal, Paulus Hook, offers rides to Wall Street, the World Financial Center, and Midtown (W 39th). From the Hyatt Regency, taking public transportation, you can get to the Financial District in less than 15 minutes, or to Times Square in about 30 minutes. Getting to the Whitney Museum and the New Museum also takes about 30 minutes, and the Empire State Building is 35 minutes away. You can get to the Metropolitan Museum of Art on the Upper East side and other Museum Mile attractions in less than an hour, again, all on public transport.

With 2,000 bridges and tunnels in the Greater NYC area and one of the largest public transit systems in the world, getting around the area is a breeze, and to make it even easier, we have made a map to help you find some spots to visit!

## Local Attractions

`
    }
  ]
};

locationIntro.items = locationIntro.items.map((n) => {
  n.content = marked(n.content);
  return n;
});
