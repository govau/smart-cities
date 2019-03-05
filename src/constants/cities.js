/* eslint-disable */
import React from 'react';
import Link from '../components/Link/Link';
import { LINKS } from './index';

// The key for each city must match exactly what appears in the source data
// If they don't match, the city will be ignored and a warning will be logged at run time
export default {
  'Albury - Wodonga': {
    id: 'albury-wodonga',
    name: 'Albury-Wodonga',
    description: 'Albury-Wodonga encompasses the twin cities of Albury in New South Wales and Wodonga in Victoria. The cities are separated by the Murray River and a state border. In many senses the two cities operate as one community, although they are each serviced by their own local government.',
  },
  'Ballarat': {
    id: 'ballarat',
    name: 'Ballarat',
    description: 'Ballarat is an inland city, located on the Yarrowee River in the Central Highlands of Victoria, approximately 100 kilometres north-west of Melbourne. Ballarat was established in 1838. It is one of Australia’s most significant gold rush towns, with a well-preserved heritage from the Victorian era.',
  },
  'Bendigo': {
    id: 'bendigo',
    name: 'Bendigo',
    description: 'Bendigo is located close to the geographical centre of Victoria and was established in 1851 after gold was discovered in the area. It is one of Australia’s most significant gold rush towns, with many examples of typical Victorian-era architecture. Bendigo is one of the smallest cities by area.',
  },
  'Cairns': {
    id: 'cairns',
    name: 'Cairns',
    description: 'Cairns is located in far North Queensland on a narrow strip of land in between the Great Dividing Range and the Coral Sea. It is located in close proximity to the Great Barrier Reef and Wet Tropics World Heritage Rainforest. Cairns is one of Australia’s younger cities, established in 1876, and one of the smallest by area.',
  },
  'Canberra': {
    id: 'act',
    name: 'Canberra',
    description: 'Canberra is Australia’s capital city and home to Parliament House, the High Court and numerous government departments and agencies. It is the largest inland city in Australia and is located in the Australian Capital Territory. Canberra is one of Australia’s youngest cities, established in 1913.',
  },
  'Geelong': {
    id: 'geelong',
    name: 'Geelong',
    description: 'Geelong is a port city located on Corio Bay, approximately 75 kilometres to the south-west of Melbourne. Geelong was established in 1838, is Victoria’s second largest city, and is the gateway to the Great Ocean Road.',
  },
  'Gold Coast - Tweed': {
    id: 'gold-coast-tweed-heads',
    name: 'Gold Coast-Tweed Heads',
    description: 'Gold Coast-Tweed Heads includes the major centres of Surfers Paradise and the twin cities of Coolangatta in Queensland and Tweed Heads in New South Wales. Gold Coast-Tweed Heads stretches from the southern coast of Queensland just across the state border to the northern coast of New South Wales.',
  },
  'Adelaide': {
    id: 'greater-adelaide',
    name: 'Adelaide',
    description: 'Adelaide is the capital of South Australia and is located on the Gulf St Vincent. Adelaide was established in 1836 and is colloquially known as the City of Churches due to the high number of historically significant church buildings. Greater Adelaide spans an area of around 3,200 square kilometres.',
  },
  'Brisbane': {
    id: 'greater-brisbane',
    name: 'Brisbane',
    description: 'Brisbane is the capital and most populous city in Queensland. It is located on the banks of the Brisbane River, was established in 1825, and is Australia’s second largest cities by area. Brisbane City Council is the largest local government by population in Australia.',
  },
  'Darwin': {
    id: 'greater-darwin',
    name: 'Darwin',
    description: 'Darwin is a coastal city and the capital of the Northern Territory. Darwin has a tropical climate with a distinct wet and dry season and is the gateway to the World Heritage listed Kakadu National Park. Darwin spans an area of around 3,100 square kilometres.The Commonwealth and Northern Territory Government have entered into an agreement to create a City Deal for Darwin.',
  },
  'Hobart': {
    id: 'greater-hobart',
    name: 'Hobart',
    description: 'Hobart is Australia’s southern-most capital city and the capital of Tasmania. Hobart sits at the base of Mount Wellington and is built on the banks of the Derwent River, whose deep port serves as a launching pad for Antarctic expeditions. Hobart is one of Australia’s oldest cities, established in 1804.',
  },
  'Melbourne': {
    id: 'greater-melbourne',
    name: 'Melbourne',
    description: 'Melbourne is the capital of Victoria and the state’s most populous city. Greater Melbourne is located on Port Phillip Bay and spans an area of around 9,900 square kilometres. Melbourne is Australia’s fastest growing capital city.',
  },
  'Perth': {
    id: 'greater-perth',
    name: 'Perth',
    description: 'Perth is a coastal city, located on the Swan River. It is Australia’s western-most capital city. It was established in 1829 and is the capital and most populous city in Western Australia. Greater Perth spans an area of around 6,400 square kilometres.',
  },
  'Sydney': {
    id: 'greater-sydney',
    name: 'Sydney',
    description: 'Sydney is Australia’s most populous city and the capital of New South Wales. Sydney is situated around its large natural harbour and is home to the Sydney Opera House and Sydney Harbour Bridge. Greater Sydney is Australia’s oldest city and one of the largest by area.',
  },
  'Launceston': {
    id: 'launceston',
    name: 'Launceston',
    description: (
      <span>
        Launceston is Tasmania’s second largest and only inland city and was established in 1806.
        The Launceston <Link href={LINKS.LAUNCESTON_CITY_DEAL}>City Deal</Link> was signed by the Commonwealth Government,
        Tasmanian Government and the City of Launceston in April 2017. It is Tasmania’s
        first City Deal and the second for Australia.
      </span>
    ),
  },
  'Mackay': {
    id: 'mackay',
    name: 'Mackay',
    description: 'Mackay is a coastal city in Queensland, located 970 kilometres north of Brisbane on the Pioneer River. Mackay has a humid subtropical climate and is one of the smallest of the 21 cities by area.',
  },
  'Newcastle': {
    id: 'newcastle-maitland',
    name: 'Newcastle-Maitland',
    description: 'The Newcastle-Maitland region encompasses the cities of both Newcastle and Maitland in New South Wales. Newcastle is located on the coast at the mouth of the Hunter River, while Maitland is located just over 30 kilometres further inland.',
  },
  'Sunshine Coast': {
    id: 'sunshine-coast',
    name: 'Sunshine Coast',
    description: 'The Sunshine Coast includes both the Sunshine Coast Council and Noosa Shire Council. The region is located on the coast, north of Brisbane. The region has long stretches of unbroken beaches and a humid subtropical climate.',
  },
  'Toowoomba': {
    id: 'toowoomba',
    name: 'Toowoomba',
    description: 'Toowoomba is an inland city located 125 kilometres west of Brisbane in Queensland. Established in 1849, Toowoomba sits on the crest of the Great Dividing Range and is 700 meters above sea level.',
  },
  'Townsville': {
    id: 'townsville',
    name: 'Townsville',
    description: (
      <span>
        Townsville is a coastal city in North Queensland. Townsville is the location of Australia’s
        first <Link href={LINKS.TOWNSVILLE_CITY_DEAL}>City Deal</Link>, a 15 year commitment between the Commonwealth of Australia, the State
        of Queensland and the Townsville City Council to deliver transformative outcomes for Townsville and its residents.
      </span>
    ),
  },
  'Western Sydney': {
    id: 'western-sydney',
    name: 'Western Sydney',
    description: 'For the purpose of the Performance Framework Western Sydney is defined as the Local Government Areas of Blue Mountains, Camden, Campbelltown, Fairfield, Hawkesbury, Liverpool, Penrith and Wollondilly. This aligns to the area of the Western Sydney City Deal, a collaborative partnership across all levels of government. This region has a fast growing and diverse population and significant natural assets, including the World Heritage listed Greater Blue Mountains World Heritage Area.',
  },
  'Wollongong': {
    id: 'wollongong',
    name: 'Wollongong',
    description: 'Wollongong is a coastal city in New South Wales, approximately 90 kilometres south of Sydney. It is located on a narrow coastal strip bordered by the Royal National Park to the north, Lake Illawarra to the south, the Tasman Sea to the east and the Illawarra Escarpment to the west.',
  },
};
