import { type Card } from '@/entities/product/card/interfaces.ts'

interface CardsProps {
  data: {
    title: string
    listLinkText: string
    listLinkUrl: string
    items: Card[]
  }
}

export { type CardsProps }
