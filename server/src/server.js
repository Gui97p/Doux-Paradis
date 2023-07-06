import app from './App.mjs';
import dotenv from 'dotenv';
dotenv.config();

app.listen(process.env.PORT, () => console.log(`Server running on PORT ${process.env.PORT}`));
