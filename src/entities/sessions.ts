export interface Session {
  title: string
  track: string
  description: string
  speakers: string
  start: string
  end: string
  hashtag: string
  zoom: string
  youtube: string
  enquete: string
  material: string
}

export interface Speaker {
  name: string
  org: string
  slug: string
  profile: string
}

export type MergedSession = {
  title: string
  track: string
  speakers: { name: string; org: string; slug: string }[]
  description: string
  start: string
  end: string
  hashtag: string
  zoom: string
  youtube: string
  enquete: string
  material: string
}

export type Sessions = MergedSession[]

export const mergeSessions = (sessions: Session[], speakers: Speaker[]) => {
  const speakersBySlug: { [slug: string]: Speaker } = speakers.reduce(
    (acc, sp) => {
      return {
        ...acc,
        [sp.slug]: sp,
      }
    },
    {}
  )

  return sessions.map(session => {
    return {
      ...session,
      speakers: session.speakers.split(',').map(s => {
        return {
          name: speakersBySlug[s].name,
          slug: speakersBySlug[s].slug,
          org: speakersBySlug[s].org,
        }
      }),
    }
  })
}
