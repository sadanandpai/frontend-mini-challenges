import { contributors } from '@/helpers/contributors'
import styles from './avatar.module.css'

interface AvatarProps {
  src: string
  alt: string
}

interface AvatarGroupProps {
  contributorNames: string[]
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <img src={src} alt={alt} className={styles.avatar} />
  )
}

export function AvatarGroup({ contributorNames }: AvatarGroupProps) {
  return (
    <div className={styles.avatarGroup}>
      {
        contributorNames
          .map(name => {
            const src = contributors.get(name)?.pic

            // If src is undefined, return null
            return src ? <Avatar key={name} src={src} alt="" /> : null
          })
          .filter(Boolean) // Remove null values
      }
    </div>
  )
}