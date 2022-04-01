import express from 'express';
import cors from 'cors';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
    //TODO Impl: routes
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    }
    )
  }
}

export default App;
