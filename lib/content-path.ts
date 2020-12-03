import fs from 'fs'
import path from 'path'
import walkSync from 'walk-sync'

// POSTS_PATH is useful when you want to get the path to a specific file
export const CONTENT_PATH = path.join(process.cwd(), 'content')

export const contentFilePaths = walkSync(CONTENT_PATH, { directories: false })
