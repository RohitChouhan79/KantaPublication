"use client";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PublishList({ Publish }) {
  return (
    <div>
      <Table className="w-full border border-gray-300">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead>Title</TableHead>
            <TableHead>Registration</TableHead>
            <TableHead>Download PDF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Publish?.map((publish) => (
            <TableRow key={publish?._id} className="border-b">
              <TableCell className="font-semibold capitalize">{publish?.title}</TableCell>
              
              {/* Registration Button */}
              <TableCell>
                <a href={publish?.registration_link} target="_blank" rel="noopener noreferrer">
                  <Button variant="contained" color="primary">Register</Button>
                </a>
              </TableCell>
              
              {/* Download PDF Button */}
              <TableCell>
                {publish?.details_pdf_url ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = publish?.details_pdf_url;
                      link.download = "Book_Details.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    Download PDF
                  </Button>
                ) : (
                  "No PDF Available"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
