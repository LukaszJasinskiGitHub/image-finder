export enum PreferredTopicsType {
  TRAVEL = 'Travel',
  CARS = 'Cars',
  WILDLIFE = 'Wildlife',
  TECHNOLOGY = 'Technology',
  OTHER = 'Other ',
}

export const PreferredTopicsOptions = [
  {name: PreferredTopicsType.TRAVEL, key: Object.keys(PreferredTopicsType)[0]},
  {name: PreferredTopicsType.CARS, key: Object.keys(PreferredTopicsType)[1]},
  {name: PreferredTopicsType.WILDLIFE, key: Object.keys(PreferredTopicsType)[2]},
  {name: PreferredTopicsType.TECHNOLOGY, key: Object.keys(PreferredTopicsType)[3]},
  {name: PreferredTopicsType.OTHER, key: Object.keys(PreferredTopicsType)[4]},
];

export enum PreferredTopicsKeys {
  OTHER = 'OTHER',
}

export const PreferredTopicsList = ['TRAVEL', 'CARS', 'WILDLIFE', 'TECHNOLOGY', 'OTHER'];