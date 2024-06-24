import { makeAutoObservable } from "mobx"
import { Hobby, RowDataWithId, Town } from "../../../shared/types/tableTypes";
import { tableData } from "../../../shared/const/tableData";
import { v1 } from "uuid";

class TableStore {
  rows: RowDataWithId[] = tableData.map((data) => ({ ...data, id: v1() }));

  constructor() {
    makeAutoObservable(this);
  }

  addRow(row: RowDataWithId, index: number) {
    this.rows.splice(index + 1, 0, row);
  }

  deleteRow(id: string) {
    this.rows = this.rows.filter((row) => row.id !== id);
  }

  changeValue({ index, key, value }: { index: number, key: keyof RowDataWithId, value: unknown }) {
    if (!this.rows[index]) return;
    if (key === 'age' && typeof value === 'number') {
      this.rows[index].age = value;
    }
    if (key === 'name' && typeof value === 'string') {
      this.rows[index].name = value;
    }
    if (key === 'town') {
      this.rows[index].town = value as Town;
    }
    if (key === 'hobby') {
      this.rows[index].hobby = value as Hobby;
    }
  }
}

export default new TableStore();