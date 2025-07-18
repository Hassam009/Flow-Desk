import {Download, Plus} from "lucide-react"
import {Button} from "@/components/ui/button"


interface PageHeaderProps{
    title:string
    subtitle:string
    onImport?:()=>void
    onCreate?:()=>void
    createLabel?:string
    importLabel?:string
}


export function PageHeader({
    title,
    subtitle,
    onImport,
    onCreate,
    createLabel="Create",
    importLabel = "Import",
}:PageHeaderProps){
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 w-full">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <Button variant="outline" className="w-full sm:w-auto" onClick={onImport}>
          <Download className="w-4 h-4 mr-2" /> {importLabel}
        </Button>
        <Button
          className="text-white hover:opacity-90 bg-primary-custom w-full sm:w-auto"
          onClick={onCreate}
        >
          {createLabel}
          <Plus className="w-4 h-4 mr-2" />
        </Button>
      </div>
    </div>
    )
}