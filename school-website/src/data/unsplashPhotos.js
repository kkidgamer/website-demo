const image = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`

export const unsplashPhotos = {
  campus: {
    src: image('photo-1763637675793-da207ba1fe18', 1200),
    photographer: 'Lens Fables',
    profile: 'https://unsplash.com/@lensfables',
    page: 'https://unsplash.com/photos/students-stand-in-front-of-a-school-building-w-u3E9_-6s0',
  },
  classroom: {
    src: image('photo-1509062522246-3755977927d7'),
    photographer: 'Quilia',
    profile: 'https://unsplash.com/@heyquilia',
    page: 'https://unsplash.com/photos/students-in-classroom-with-teacher-presenting-zFSo6bnZJTw',
  },
  field: {
    src: image('photo-1746937520036-b32bce8ea4f0'),
    photographer: 'Bo Peng',
    profile: 'https://unsplash.com/@micraow',
    page: 'https://unsplash.com/photos/students-watch-a-soccer-game-on-a-school-field-n2vrwouucaA',
  },
  basketball: {
    src: image('photo-1775376723223-7d46d252db40'),
    photographer: 'Diego Mattevi',
    profile: 'https://unsplash.com/@diegomattevi',
    page: 'https://unsplash.com/photos/students-in-uniforms-practice-on-a-school-basketball-court-WBYi0mHJ3e8',
  },
  library: {
    src: image('photo-1776571661811-c311d42634d9'),
    photographer: 'jason hu',
    profile: 'https://unsplash.com/@hujason',
    page: 'https://unsplash.com/photos/students-studying-at-tables-in-a-library-EP8lBWLFLkg',
  },
}
