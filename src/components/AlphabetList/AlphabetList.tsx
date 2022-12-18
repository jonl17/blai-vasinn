import Text from '../Text'

type Document = {
  uid: string
  name: string | null
}

type Props = {
  listOfDocuments: Array<Document>
}

// credits for this function goes to chat gpt
function groupByFirstLetter(documents: Document[]): Record<string, Document[]> {
  return documents.reduce((groups, document) => {
    const firstLetter = document.name?.[0].toUpperCase()
    if (firstLetter !== undefined && !groups[firstLetter]) {
      groups[firstLetter] = []
    }
    if (firstLetter !== undefined) {
      groups[firstLetter].push(document)
    }
    return groups
  }, {} as Record<string, Document[]>)
}

type LetterListProps = {
  letter: string
  listOfDocuments: Array<Document>
}

const LetterList = ({ letter, listOfDocuments }: LetterListProps) => {
  return (
    <div className="flex">
      <Text className="w-16" variant="large">
        {letter}
      </Text>
      <ul className="grid items-baseline">
        {listOfDocuments.map((document, key) => (
          <button className="text-left hover:text-blue" key={key}>
            <Text variant="small">{document.name}</Text>
          </button>
        ))}
      </ul>
    </div>
  )
}

export default function AlphabetList({ listOfDocuments }: Props) {
  const groupedDocuments = groupByFirstLetter(listOfDocuments)
  const keys = Object.keys(groupedDocuments).sort()

  return (
    <div className="mt-5">
      <ul className="grid gap-5">
        {keys.map((letter, key) => (
          <li key={key}>
            <LetterList
              letter={letter}
              listOfDocuments={groupedDocuments[letter]}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
