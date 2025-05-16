interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-secondary/10 dark:bg-primary/10">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl space-y-3 md:space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
          <p className="text-base md:text-xl text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  )
}

