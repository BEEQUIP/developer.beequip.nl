export interface MetaOptions {
    title?: string
    description?: string
}

export interface FrontMatterOptions {
    title?: string
    description?: string
}

export interface CurrentPage {
    filename: string
    route: string
    meta?: Record<string, MetaOptions>
}

export interface Page {
    name: string
    route: string
    frontMatter?: FrontMatterOptions
    meta?: string | MetaOptions
    navigationTitle?: string
    isActive: boolean
    isDirectory: boolean
    // locale: string
    children?: Page[]
}
