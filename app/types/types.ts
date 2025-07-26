export type AdviceItem = {
  title: string;
  text: string;
  tags?: string[];
}

export type AdviceContextType = {
  adviceList: AdviceItem[];
  addAdvice: (advice: AdviceItem) => void;
  editAdvice: (index: number, newAdvice: AdviceItem) => void;
  deleteAdvice: (index: number) => void;
};

export type ButtonProps = { 
    variant?: "primary" | "secondary" | "submit" | "back";
    children: React.ReactNode;
    onClick?: () => void;
}

export type SelectOption = {
    label: string;
    value: string | number;
}

export interface TagProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  onAddCategory?: (newCategory: string) => void; // ✅ Add this line
}

export interface AdviceInputProps {
  customTag: string;
  setCustomTag: React.Dispatch<React.SetStateAction<string>>;
  handleAddCustomTag: () => void;
  onAddCategory: (newCategory: string) => void;
}

export interface CategoryInputProps {
  customTag: string;
  setCustomTag: (tag: string) => void;
  handleAddCustomTag: () => void;
   //onAddCategory: (newCategory: string) => void;
}

export interface TagDropdownProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}


