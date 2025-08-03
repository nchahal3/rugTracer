import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/scan-token', (req, res) => {
    const { tokenAddress } = req.body;

    // Mocked response for demonstration purposes
    const response = {
        rugScore: 72,
        flags: {
            mintable: true,
            lpLocked: false,
            highTax: true
        }
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});