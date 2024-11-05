"use client";
import ServiceColumn from "../component/Columns";
import Header from "../component/Header";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function Service() {
  return (
    <>
      <div className="w-full">
        <div className="overflow-hidden h-[4rem] md:h-[6rem] lg:h-[6rem] bg-accent-1 grid"></div>
      </div>
      <div className=" text-white bg-local bg-center bg-cover bg-black bg-[url('https://res.cloudinary.com/dtsllu9jj/image/upload/v1696740155/johnny/IMG_6829_wjceuv.jpg')] ">
        <div className="p-20 backdrop-brightness-50 backdrop-blur-sm grid grid-flow-row md:grid-flow-col">
          <div className="grid gap-4 md:w-3/4">
            <h1 className=" font-dela text-3xl">
              Individualized Personal Training
            </h1>
            <p className=" text-sm ">
              Whether you are training to look good on the beach, to feel
              healthier (and/or stronger), to enhance a specific body part or to
              make yourself more resilient to what life throws your way
              - Johnny can help you achieve your specific fitness goals. Feel
              like working out on days you don’t see Johnny? Each of Johnny’s
              in-person personal training clients receives access to
              individualized workout programs with instructional videos
              delivered via app, which will be continuously modified upon
              request to enhance progress towards your goals.{" "}
            </p>
          </div>
          <div className="py-5">
            <Table removeWrapper hideHeader aria-label="Personal training">
              <TableHeader>
                <TableColumn>1</TableColumn>
                <TableColumn>2</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>1 on 1 Session</TableCell>
                  <TableCell>$95</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Partner Training (2 people)</TableCell>
                  <TableCell>$120</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Small Group Training (3 People)</TableCell>
                  <TableCell>$150</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Larger Group</TableCell>
                  <TableCell>Please Consult For Rate</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="text-white bg-local bg-center bg-cover bg-black bg-[url('https://res.cloudinary.com/dtsllu9jj/image/upload/v1730772559/How-Nutrition-Coaching-Can-Aid-in-Mental-Clarity-and-Focus-_yxkizv.jpg')]">
        <div className="p-20 backdrop-brightness-50 backdrop-blur-sm grid grid-flow-row md:grid-flow-col">
          <div className="grid gap-4 md:w-3/4">
            <h1 className=" font-dela text-3xl">Nutrition Coaching</h1>
            <p className=" text-sm ">
              Whether they be fat loss, muscle gain, healthier living,
              performance improvements, lifestyles changes, accountability, or
              habit change every single one of your fitness & nutrition goals
              can be enhanced through Nutrition Coaching.
              <br />
              Through positive psychology, coaching you to eat mindfully,
              creating balanced meals and through supporting you to foster a
              healthy relationship with food we will work together to achieve
              your goals. 
            </p>
          </div>
          <div className="py-5">
            <Table removeWrapper hideHeader aria-label="Personal training">
              <TableHeader>
                <TableColumn>1</TableColumn>
                <TableColumn>2</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>1 on 1 Session</TableCell>
                  <TableCell>$95</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Partner Training (2 people)</TableCell>
                  <TableCell>$120</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Small Group Training (3 People)</TableCell>
                  <TableCell>$150</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Larger Group</TableCell>
                  <TableCell>Please Consult For Rate</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

        </div>
      </div>
      <div className="text-white bg-local bg-center bg-cover bg-black bg-[url('https://res.cloudinary.com/dtsllu9jj/image/upload/v1730772651/shutterstock_1700797540_nsgivu.png')]">
        <div className="p-20 backdrop-brightness-50 backdrop-blur-sm grid grid-flow-row md:grid-flow-col">
          <div className="grid gap-4 md:w-3/4">
            <h1 className=" font-dela text-3xl">
              Individualized Online Training
            </h1>
            <p className=" text-sm ">
              If you are looking for help with a specific goal but can’t do
              in-person training, online training with Johnny is an accessible
              and affordable option you can do from home or on the go. Each
              online training client receives weekly progress check-ins and an
              updated workout program that adapts as you progress towards your
              goals.{" "}
            </p>
          </div>
          <div className="py-5">
            <Table removeWrapper hideHeader aria-label="Personal training">
              <TableHeader>
                <TableColumn>1</TableColumn>
                <TableColumn>2</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>1 on 1 Session</TableCell>
                  <TableCell>$95</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Partner Training (2 people)</TableCell>
                  <TableCell>$120</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Small Group Training (3 People)</TableCell>
                  <TableCell>$150</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Larger Group</TableCell>
                  <TableCell>Please Consult For Rate</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

        </div>
      </div>
    </>
  );
}
